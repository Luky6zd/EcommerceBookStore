import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from 'react-sweetalert2';

function Categories({swal}) {
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState('');
    const [editedCategory, setEditedCategory] = useState(null);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        });
    }

    async function saveCategory(ev) {
        ev.preventDefault();

        const data = {
            name, 
            parentCategory,
            properties: properties.map(pr => ({
                name: pr.name,
                values: pr.values.split(','),
            })),
        };

        if(editedCategory) {
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        } else {
            await axios.post('/api/categories', data);
        }
        setName('');
        setParentCategory('');
        setProperties([]);
        fetchCategories();
    }

    function editCategory(category) {
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
        setProperties(
            category.properties.map(({name, values}) => ({
                name,
                values: values.join(',')
            }))
        );
    }

    function deleteCategory(category) {
        swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete ${category.name}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d55',
            reverseButtons: true,
        }).then(async result => {
            if(result.isConfirmed) {
                const {_id} = category; 
                await axios.delete('/api/categories?_id='+_id);
                fetchCategories();
            }
            //console.log({result});
        });
    }

    function addProperty() {
        setProperties(prev => {
            return [...prev, {name:'', values:''}];
        });
    }

    function handlePropertyNameChange(index, property, newName) {
        //console.log({index, property, newName});
        setProperties(prev => {
            const properties = [...prev];
            properties[index].name = newName;
            return properties;
        });
    }

    function handlePropertyValuesChange(index, property, newValues) {
        setProperties(prev => {
            const properties = [...prev];
            properties[index].values = newValues;
            return properties;
        });
    }

    function removeProperty(indexToRemove) {
        setProperties(prev => {
            const newProperties = [...prev];
            return newProperties.filter((param, propertyIndex) => {
                return propertyIndex !== indexToRemove;
            });
        });
    }

    return(
        <Layout>
            <h1><b>Categories</b></h1>
            <div className="text-base font-medium mb-1">
            <label>
                {editedCategory ? `Edit category ${editedCategory.name}` : 'Create new category'}
            </label>
            </div>

            <form onSubmit={saveCategory}>
                <div className="flex gap-1">
                    <input
                    //className="" 
                    type="text"
                    placeholder={'Category name'}
                    onChange={ev => setName(ev.target.value)}
                    value={name} />

                <select 
                    //className="" 
                    onChange={ev => setParentCategory(ev.target.value)}
                    value={parentCategory}>
                <option value="">No parent category</option>

                {categories.length > 0 && categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
            </select>
        </div>
       
            <div className="font-medium mb-2">
            <label className="block">Book properties</label>
            <button
                onClick={addProperty}
                type="button" 
                className="btn-gray text-sm mb-2 font-medium">
                    Add book property
            </button>

            {properties.length > 0 && properties.map((property, index) => (
                <div key={property.name}
                     className="flex gap-1 mb-2">
                    
                    <input type="text"
                           className="mb-0"
                           value={property.name}
                           onChange={ev => handlePropertyNameChange(index, property, ev.target.value)}
                           placeholder="property name (example: color)" />

                    <input type="text" 
                           className="mb-0"
                           onChange={ev => handlePropertyValuesChange(index, property, ev.target.value)}
                           value={property.values} 
                           placeholder="values (example: value1, value2)" />

                    <button
                        onClick={() => removeProperty(index)}
                        type="button"
                        className="btn-delete">
                        <b>Remove</b>
                    </button>
                </div>
            ))}
            </div>

            <div className="flex gap-1">
            {editedCategory && (
                <button
                    type="button"
                    onClick={() => {
                        setEditedCategory(null);
                        setName('');
                        setParentCategory('');
                        setProperties([]);
                    }}
                    className="btn-delete font-medium">
                        Cancel
                </button>
            )}
            
            <button 
                type="submit"
                className="btn-save font-medium py-1">
                    Save
            </button>
            </div>
            
            </form>
            {!editedCategory && (
                <table className="basic mt-4">
                <thead>
                    <tr>
                        <td><b>Category Name</b></td>
                        <td><b>Parent Category</b></td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {categories.length > 0 && categories.map(category => (
                        <tr key={category._id}>
                            <td>{category.name}</td>
                            <td>{category?.parent?.name}</td>
                            <td>
                                <div className="flex"></div>
                                <button
                                    onClick={() => editCategory(category)} 
                                    className="btn-save ml-1 mr-2">
                                        Edit
                                </button>

                                <button
                                    onClick={() => deleteCategory(category)}
                                    className="btn-delete">
                                        Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
              </table>
            )}
        </Layout>
    );
}

export default withSwal(({swal}, ref) => (
 <Categories swal={swal} />
));