//import { withFileUpload } from 'next-multiparty';
//import { handle } from 'next-multiparty';
import multiparty from 'multiparty';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';
import { mongooseConnect } from '@/lib/mongoose';
import { isAdminRequest } from './auth/[...nextauth]';
const bucketName = 'ecommerce-book-store';

//const bucket2_Name = 'luky-next-ecommerce';

//export default withFileUpload(async (req, res) => {
//    res.json({test: 1})
//})

//export default async function withFileUpload(req, res)
// API Handlers
export default async function handle(req, res) {
    await mongooseConnect();
    await isAdminRequest(req, res);

    const form = new multiparty.Form();

    const {fields, files} = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({fields, files});
        });
    });

    console.log('length:', files.file.length);
    //console.log(fields);
    //res.json('ok');

    // bucket 1
    const client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
    });

    // making explicite iterable object from var links
    //var links = [];
    const links = [];
    const link = Array.from(links);
    // ERROR:res.data.links is not iterable
    setImages(oldImages => {
        return [...oldImages, ...res.data.links];
    });
    link[Symbol.iterator] = function() {
        let index = 0;
        return {
            next: () => {
                if (index < links.length) {
                    return { value: link[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    };

    for (const link of links) {
        console.log(link);
    }

    for (const file of files.file) {
        const ext = file.originalFilename.split('.').pop();
        const newFilename = Date.now() + '.' + ext;
        //console.log({ext, file});

        await client.send(new PutObjectCommand({
            Bucket: bucketName,
            Key: newFilename,
            Body: fs.readFileSync(file.path),
            ACL: 'public-read',
            ContentType: mime.lookup(file.path),
        }));

        // link ne vodi na url lokaciju
        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
        //link = `https://ecommerce-book-store.s3.eu-north-1.amazonaws.com/bonton.jpg`;
        links.push(link);
    }
    
    return res.json({links});
}

export const config = {
    api: {bodyParser: false},
};