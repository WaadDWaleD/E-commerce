// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { getAllBrands } from '@/app/_services/brand.services';

// // type BrandType = {
// //   _id: string;
// //   name: string;
// //   slug: string;
// //   image: string;
// // };

// // export default function BrandsPage() {
// //   const [brands, setBrands] = useState<BrandType[]>([]);

// //   const fetchBrands = async () => {
// //     try {
// //       const data = await getAllBrands();
// //       setBrands(data.data); // هنا data.data هو اللي فيه المصفوفة
// //     } catch (err) {
// //       console.error('Error fetching brands:', err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBrands();
// //   }, []);

// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold mb-4">Brands</h2>
// //       <div className="grid grid-cols-4 gap-4">
// //         {brands.map((brand) => (
// //           <div key={brand._id} className="border p-4 rounded shadow hover:shadow-lg">
// //             <img
// //               src={brand.image}
// //               alt={brand.name}
// //               className="w-full h-32 object-contain mb-2"
// //             />
// //             <h3 className="text-lg font-semibold">{brand.name}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';
// import React, { useEffect, useState } from 'react';

// type BrandType = {
//   _id: string;
//   name: string;
//   slug: string;
//   image: string;
// };

// export default function BrandsPage() {
//   const [brands, setBrands] = useState<BrandType[]>([]); // <-- ابدأ بمصفوفة فارغة

//   const fetchBrands = async () => {
//     try {
//       const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands?limit=40');
//       const data = await res.json();
//       console.log('Fetched brands:', data);
//       setBrands(data.data || []); // <-- خليها مصفوفة فارغة لو data غير موجودة
//     } catch (err) {
//       console.error(err);
//       setBrands([]); // <-- fallback
//     }
//   };

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Brands</h2>
//       {brands.length === 0 ? (
//         <p>No brands found.</p>
//       ) : (
//         <div className="grid grid-cols-4 gap-4">
//           {brands.map((brand) => (
//             <div key={brand._id} className="border p-4 rounded shadow hover:shadow-lg text-center">
//               <img src={brand.image} alt={brand.name} className="w-full h-32 object-contain mb-2" />
//               <h3 className="font-semibold">{brand.name}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
'use client';
import React, { useEffect, useState } from 'react';

type BrandType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export default function BrandsPage() {
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [loading, setLoading] = useState(true); // ← حالة اللودينج

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands?limit=40');
      const data = await res.json();
      setBrands(data.data || []);
    } catch (err) {
      console.error(err);
      setBrands([]);
    } finally {
      setLoading(false); // ← انتهى اللودينج
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Brands</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <i className="fas fa-spinner fa-spin text-4xl text-green-500"></i>
        </div>
      ) : brands.length === 0 ? (
        <p>No brands found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {brands.map((brand) => (
            <div key={brand._id} className="border p-4 rounded shadow hover:shadow-lg text-center">
              <img src={brand.image} alt={brand.name} className="w-full h-32 object-contain mb-2" />
              <h3 className="font-semibold">{brand.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
