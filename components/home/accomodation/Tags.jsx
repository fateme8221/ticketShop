import React from 'react';

const tags = [
    {id: 1, tag: "اجاره ویلا در رامسر"},
    {id: 2, tag: "اجاره ویلا در تهران"},
    {id: 3, tag: "اجاره ویلا در کردان"},
    {id: 4, tag: "اجاره ویلا در تهران"},
    {id: 5, tag: "اجاره ویلا در رشت"},
    {id: 6, tag: "اجاره ویلا در ساری"},
    {id: 7, tag: "اجاره ویلا در نور"},
    {id: 8, tag: "اجاره ویلا در گرگان"},
]
const Tags = () => {
    return (
        <div className='flex justify-center flex-wrap gap-4 mb-16'>
            {tags.map(item => 
                <p className='border rounded-xl cursor-pointer bg-white hover:shadow-md duration-200 text-center px-3 py-1 md:flex-1 text-sm bold text-gray-600' key={item.id}>{item.tag}</p>
            )}
        </div>
    );
};

export default Tags;