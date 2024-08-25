import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function BookForm({
    _id, 
    title: currentTitle,
    description: currentDescription,
    price: currentPrice,
    images: currentImages,
    category: assignedCategory,
    properties: assignedProperties,
}) {
    const [title, setTitle] = useState(currentTitle || '');
    const [description, setDescription] = useState(currentDescription || '');
    const [price, setPrice] = useState(currentPrice || '');
    const [goToBooks, setGoToBooks] = useState(false);
    const [images, setImages] = useState(currentImages || []);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(assignedCategory || '');
    const [bookProperties, setBookProperties] = useState(assignedProperties || {});
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }, []);

    //console.log({_id});

    async function saveBook(ev) {
        ev.preventDefault();

        const data = {
            title,
            description,
            price, 
            images, 
            category,
            properties: bookProperties
        };

        if (_id) {
            //update
            await axios.put('/api/books', {...data, _id});
        } else {
            //create book
            await axios.post('/api/books', data);
        }
        setGoToBooks(true);
    }

    if (goToBooks) {
        router.push('/books');
    }

    // upload image
    async function uploadImages(ev) {
        const files = ev.target?.files;
        //console.log(e);

        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();

            for (const file of files) {
                data.append('file', file);

                //'/books/new'
                //'/api/upload'
                //axios.post('/books/new', data).then((response) => {
                 //   console.log(response);
                 // }, (error) => {
                  //  console.log(error);
                  //});
            }

            //const res = await axios.post(C:\Users\User\Desktop\app\ecommerce\assets\storedImages', data);
            //const res = await fetch('/api/upload', data) - IZBACUJE GREŠKU-status 500
            // 'http://localhost:3000/pages/api/upload'
            // ecommerce\pages\api\upload
            //axios.post
            //Save nije spremao - await axios error
            //const res = await axios.post('http://localhost:3000/books/new', data);

            //'/books/new'
            //'/api/upload'
            const result = await axios.post('/api/upload', data);
             //{
             //  method: 'POST',
             //  body: data,
            //})

            setImages(oldImages => {
                return [...oldImages, ...result.data.links];
            });
        
            //console.log(res.data);

            setIsUploading(false);
        }
   }

   function updateImagesOrder(images) {
    setImages(images);
    //console.log(images);
   }

   const propertiesToFill = [];

   if(categories.length > 0 && category) {
    let categoryInfo = categories.find(({_id}) =>_id === category);

    console.log(categoryInfo);

    propertiesToFill.push(...categoryInfo.properties);

    while(categoryInfo?.parent?._id) {
        const parentCategory = categories.find(({_id}) =>_id === categoryInfo?.parent?._id);
        propertiesToFill.push(...parentCategory.properties);
        categoryInfo = parentCategory;
    }
   }

   function setBookProp(propName, value) {
    setBookProperties(prev => {
        const newBookProps = {...prev};
        newBookProps[propName] = value;

        return newBookProps;
    });
   }

    return (
        <form onSubmit={saveBook}>
        <label>Book name</label>
        <input
            type="text"
            placeholder="book name"
            value={title} 
            onChange={ev => setTitle(ev.target.value)} />
        
        <label>
            Category
        </label>
        <select value={category}
                onChange={ev => setCategory(ev.target.value)}>
        
            <option value="">Uncategorized</option>
            {categories.length > 0 && categories.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
            ))}  
        </select>

        {propertiesToFill.length > 0 && propertiesToFill.map(pr => (
            <div key={pr.name} 
                 className="">
                <label>{pr.name[0].toUpperCase() + pr.name.substring(1)}</label>
                <div>
                    <select value={bookProperties[pr.name]} 
                            onChange={ev => setBookProp(pr.name, ev.target.value)}>
                        
                    {pr.values.map(val => (
                        <option key={val} 
                                value={val}>{val}</option>
                    ))}
                    </select>
                </div>
            </div>
        ))}
            
        <label>
            Photos
        </label>
        <div className="mb-2 flex-wrap gap-1">
            <ReactSortable
                className="flex flex-wrap gap-1"
                list={images} 
                setList={updateImagesOrder}>

                {!!images?.length && images.map(link => (
                    <div key={link} 
                         className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-100">
                        <img src={link} alt="" className="rounded-lg"/>
                    </div>
                ))}
            </ReactSortable>

            {isUploading && (
                <div className="h-24 p-1 flex items-center">
                    <Spinner />
                </div>
            )}

            <label className="w-28 h-28 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-gray-500 rounded-sm bg-white shadow-md border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     strokeWidth={1.5} 
                     stroke="currentColor" 
                     className="size-6">
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>

                <div>
                    Add photo
                </div>

                <input type="file" 
                       onChange={uploadImages} 
                       className="hidden" />
            </label>
        
            
        </div>

        <label>Description</label>
        <textarea
            placeholder="description" 
            value={description}
            onChange={ev => setDescription(ev.target.value)}
        />

        <label>Price</label>
        <input 
            type="number"
            placeholder="price"
            value={price}
            onChange={ev => setPrice(ev.target.value)} 
        />

        <button
            type="submit" 
            className="btn-save">
                Save
            </button>
        </form>
    );
}