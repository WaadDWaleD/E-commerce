// 'use client';
// import React, { useEffect, useState } from 'react';

// type CategoryType = {
//   _id: string;
//   name: string;
//   slug: string;
//   image: string;
// };

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState<CategoryType[]>([]);

//   const fetchCategories = async () => {
//     try {
//       const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories?limit=10');
//       const data = await res.json();
//       console.log('Fetched categories:', data);
//       setCategories(data.data); // <---- هنا نجيب من data
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Categories</h2>
//       {categories.length === 0 ? (
//         <p>No categories found.</p>
//       ) : (
//         <div className="grid grid-cols-4 gap-4">
//           {categories.map((cat) => (
//             <div key={cat._id} className="border p-4 rounded shadow text-center">
//               {cat.image && (
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="w-full h-32 object-contain mb-2"
//                 />
//               )}
//               <h3>{cat.name}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState } from 'react';

type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true); // ← حالة اللودينج

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories?limit=10');
      const data = await res.json();
      console.log('Fetched categories:', data);
      setCategories(data.data || []);
    } catch (err) {
      console.error(err);
      setCategories([]);
    } finally {
      setLoading(false); // ← انتهى اللودينج
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          {/* أيقونة سلة التسوق */}
          <i className="fas fa-shopping-cart fa-spin text-4xl text-green-500"></i>
        </div>
      ) : categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat._id} className="border p-4 rounded shadow text-center">
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-32 object-contain mb-2"
                />
              )}
              <h3 className="font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
