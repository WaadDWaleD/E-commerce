// // // // // // 'use client'
// // // // // // import { Button } from '@/components/ui/button'
// // // // // // import { Input } from '@/components/ui/input'
// // // // // // import { Label } from '@/components/ui/label'
// // // // // // import React, { useContext, useEffect, useRef, useState } from 'react'
// // // // // // import { createCashOrder, createCheckoutSession } from './order.actions'
// // // // // // import { getUserCartSer } from '@/app/_services/cart.services'
// // // // // // import { toast } from 'sonner'
// // // // // // import { CartContext } from '../CartContext'

// // // // // // export default function Payment() {

// // // // // //   const {updateCartCount} = useContext(CartContext)

// // // // // //   const cityInput = useRef<HTMLInputElement>(null);
// // // // // //   const phoneInput = useRef<HTMLInputElement>(null);
// // // // // //   const detailsInput = useRef<HTMLInputElement>(null);

// // // // // //   const [cartId, setCartId] = useState<null | string>(null)

// // // // // //   async function handleGettingUserCart() {
// // // // // //     const res = await getUserCartSer();
// // // // // //     setCartId(res.cartId)
// // // // // //   }


// // // // // //  useEffect(function(){
// // // // // //     handleGettingUserCart()
// // // // // //   },[])


// // // // // //   async function makeCashOrder(){
    
// // // // // //     const address = {
// // // // // //       details: detailsInput.current?.value || '',
// // // // // //       phone: phoneInput.current?.value || '',
// // // // // //       city: cityInput.current?.value || ''
// // // // // //     }
// // // // // //     const isSuccessed = await createCashOrder(cartId || '',address)
// // // // // //     if(isSuccessed){
// // // // // //       toast.success("Order created successfully")
// // // // // //       updateCartCount(0);

// // // // // //     }
// // // // // //     else{
// // // // // //       toast.error("Error occured while creating order")
// // // // // //     }


// // // // // //   }


// // // // // //  async function makeOnlineOrder(){
// // // // // //      const address = {
// // // // // //       details: detailsInput.current?.value || '',
// // // // // //       phone: phoneInput.current?.value || '',
// // // // // //       city: cityInput.current?.value || ''
// // // // // //     }
// // // // // //     const res = await createCheckoutSession(cartId || '', address)
// // // // // //     if(res == false){
// // // // // //       toast.error("error in make online order")
// // // // // //     }
// // // // // //     else{
// // // // // //       window.open(res , "_self")
// // // // // //     }
// // // // // //   }



// // // // // //   return (
// // // // // //     <div className='w-1/2 mx-auto'>
// // // // // //        <div>
// // // // // //          <Label>City</Label>
// // // // // //         <Input ref={cityInput}/>
// // // // // //        </div>

// // // // // //        <div>
// // // // // //          <Label>Phone</Label>
// // // // // //         <Input type='tel' ref={phoneInput}/>
// // // // // //        </div>

// // // // // //        <div>
// // // // // //          <Label>Details</Label>
// // // // // //         <Input ref={detailsInput}/>
// // // // // //        </div>
       

// // // // // //        <Button  onClick={makeCashOrder} className='cursor-pointer mt-3'>
// // // // // //         Make Cash order
// // // // // //        </Button>
// // // // // //        <Button  onClick={makeOnlineOrder} className='cursor-pointer mt-3'>
// // // // // //         Make Online order
// // // // // //        </Button>

// // // // // //     </div>
// // // // // //   )
// // // // // // }



// // // // // 'use client' 
// // // // // import { Button } from '@/components/ui/button' 
// // // // // import { Input } from '@/components/ui/input' 
// // // // // import { Label } from '@/components/ui/label' 
// // // // // import React, { useContext, useEffect, useRef, useState } from 'react' 
// // // // // import { createCashOrder, createCheckoutSession } from './order.actions' 
// // // // // import { getUserCartSer } from '@/app/_services/cart.services' 
// // // // // import { toast } from 'sonner' 
// // // // // import { CartContext } from '../CartContext' 

// // // // // export default function Payment() { 
// // // // //   const {updateCartCount} = useContext(CartContext) 

// // // // //   const cityInput = useRef<HTMLInputElement>(null); 
// // // // //   const phoneInput = useRef<HTMLInputElement>(null); 
// // // // //   const detailsInput = useRef<HTMLInputElement>(null); 

// // // // //   const [cartId, setCartId] = useState<null | string>(null) 

// // // // //   async function handleGettingUserCart() { 
// // // // //     const res = await getUserCartSer(); 
// // // // //     setCartId(res.cartId) 
// // // // //   } 

// // // // //   useEffect(function(){ 
// // // // //     handleGettingUserCart() 
// // // // //   },[]) 

// // // // //   async function makeCashOrder(){ 
// // // // //     const address = { 
// // // // //       details: detailsInput.current?.value || '', 
// // // // //       phone: phoneInput.current?.value || '', 
// // // // //       city: cityInput.current?.value || '' 
// // // // //     } 

// // // // //     const isSuccessed = await createCashOrder(cartId || '',address) 
// // // // //     if(isSuccessed){ 
// // // // //       toast.success("Order created successfully") 
// // // // //       updateCartCount(0); 
// // // // //     } else{ 
// // // // //       toast.error("Error occured while creating order") 
// // // // //     } 
// // // // //   } 

// // // // //   async function makeOnlineOrder(){ 
// // // // //     const address = { 
// // // // //       details: detailsInput.current?.value || '', 
// // // // //       phone: phoneInput.current?.value || '', 
// // // // //       city: cityInput.current?.value || '' 
// // // // //     } 

// // // // //     const res = await createCheckoutSession(cartId || '', address) 
// // // // //     if(res == false){ 
// // // // //       toast.error("error in make online order") 
// // // // //     } else{ 
// // // // //       window.open(res , "_self") 
// // // // //     } 
// // // // //   } 

// // // // //   return ( 
// // // // //     <div className='w-1/2 mx-auto'> 
// // // // //       <div> 
// // // // //         <Label>City</Label> 
// // // // //         <Input ref={cityInput}/> 
// // // // //       </div> 
// // // // //       <div> 
// // // // //         <Label>Phone</Label> 
// // // // //         <Input type='tel' ref={phoneInput}/> 
// // // // //       </div> 
// // // // //       <div> 
// // // // //         <Label>Details</Label> 
// // // // //         <Input ref={detailsInput}/> 
// // // // //       </div> 
// // // // //       <Button onClick={makeCashOrder} className='cursor-pointer mt-3'> 
// // // // //         Make Cash order 
// // // // //       </Button> 
// // // // //       <Button onClick={makeOnlineOrder} className='cursor-pointer mt-3'> 
// // // // //         Make Online order 
// // // // //       </Button> 
// // // // //     </div> 
// // // // //   ) 
// // // // // }

// // // // 'use client'
// // // // import { Button } from '@/components/ui/button'
// // // // import { Input } from '@/components/ui/input'
// // // // import { Label } from '@/components/ui/label'
// // // // import React, { useContext, useEffect, useRef, useState } from 'react'
// // // // import { createCashOrder, createCheckoutSession } from './order.actions'
// // // // import { getUserCartSer } from '@/app/_services/cart.services'
// // // // import { toast } from 'sonner'
// // // // import { CartContext } from '../CartContext'

// // // // export default function Payment() {
// // // //   const { updateCartCount } = useContext(CartContext)

// // // //   const cityInput = useRef<HTMLInputElement>(null)
// // // //   const phoneInput = useRef<HTMLInputElement>(null)
// // // //   const detailsInput = useRef<HTMLInputElement>(null)

// // // //   const [cartId, setCartId] = useState<null | string>(null)
// // // //   const [errors, setErrors] = useState({ city: '', phone: '', details: '' })

// // // //   async function handleGettingUserCart() {
// // // //     const res = await getUserCartSer()
// // // //     setCartId(res.cartId)
// // // //   }

// // // //   useEffect(() => {
// // // //     handleGettingUserCart()
// // // //   }, [])

// // // //   // ✅ التحقق من صحة البيانات
// // // //   function validateInputs() {
// // // //     const city = cityInput.current?.value.trim()
// // // //     const phone = phoneInput.current?.value.trim()
// // // //     const details = detailsInput.current?.value.trim()

// // // //     const newErrors = { city: '', phone: '', details: '' }
// // // //     let isValid = true

// // // //     if (!city) {
// // // //       newErrors.city = 'City is required'
// // // //       isValid = false
// // // //     }

// // // //     if (!phone) {
// // // //       newErrors.phone = 'Phone number is required'
// // // //       isValid = false
// // // //     } else if (!/^[0-9]{10,}$/.test(phone)) {
// // // //       newErrors.phone = 'Invalid phone number'
// // // //       isValid = false
// // // //     }

// // // //     if (!details) {
// // // //       newErrors.details = 'Address details are required'
// // // //       isValid = false
// // // //     }

// // // //     setErrors(newErrors)
// // // //     return isValid ? { city, phone, details } : null
// // // //   }

// // // //   async function makeCashOrder() {
// // // //     const valid = validateInputs()
// // // //     if (!valid) return

// // // //     const { city, phone, details } = valid
// // // //     const address = { details, phone, city }

// // // //     const isSuccessed = await createCashOrder(cartId || '', address)
// // // //     if (isSuccessed) {
// // // //       toast.success('Order created successfully')
// // // //       updateCartCount(0)
// // // //     } else {
// // // //       toast.error('Error occurred while creating order')
// // // //     }
// // // //   }

// // // //   async function makeOnlineOrder() {
// // // //     const valid = validateInputs()
// // // //     if (!valid) return

// // // //     const { city, phone, details } = valid
// // // //     const address = { details, phone, city }

// // // //     const res = await createCheckoutSession(cartId || '', address)
// // // //     if (res == false) {
// // // //       toast.error('Error in making online order')
// // // //     } else {
// // // //       window.open(res, '_self')
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="w-1/2 mx-auto mt-10 p-6 border border-gray-300 rounded-xl shadow-md">
// // // //       <div>
// // // //         <Label>City</Label>
// // // //         <Input ref={cityInput} className={`mt-1 ${errors.city ? 'border-red-500' : ''}`} />
// // // //         {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
// // // //       </div>

// // // //       <div className="mt-4">
// // // //         <Label>Phone</Label>
// // // //         <Input
// // // //           type="tel"
// // // //           ref={phoneInput}
// // // //           className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
// // // //         />
// // // //         {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// // // //       </div>

// // // //       <div className="mt-4">
// // // //         <Label>Details</Label>
// // // //         <Input
// // // //           ref={detailsInput}
// // // //           className={`mt-1 ${errors.details ? 'border-red-500' : ''}`}
// // // //         />
// // // //         {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
// // // //       </div>

// // // //       <div className="flex justify-between mt-6">
// // // //         <Button onClick={makeCashOrder} className="bg-green-600 hover:bg-green-700 text-white">
// // // //           Make Cash order
// // // //         </Button>
// // // //         <Button onClick={makeOnlineOrder} className="bg-blue-600 hover:bg-blue-700 text-white">
// // // //           Make Online order
// // // //         </Button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // 'use client';

// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';
// // // import React, { useContext, useEffect, useRef, useState } from 'react';
// // // import { createCashOrder, createCheckoutSession } from './order.actions';
// // // import { getUserCartSer } from '@/app/_services/cart.services';
// // // import { toast } from 'sonner';
// // // import { CartContext } from '../CartContext';

// // // export default function Payment() {
// // //   const { updateCartCount } = useContext(CartContext);
// // //   const cityInput = useRef<HTMLInputElement>(null);
// // //   const phoneInput = useRef<HTMLInputElement>(null);
// // //   const detailsInput = useRef<HTMLInputElement>(null);

// // //   const [cartId, setCartId] = useState<string | null>(null);
// // //   const [cartEmpty, setCartEmpty] = useState<boolean>(false);

// // //   async function handleGettingUserCart() {
// // //     const res = await getUserCartSer();

// // //     if (res?.numOfCartItems === 0) {
// // //       setCartEmpty(true);
// // //     } else {
// // //       setCartId(res?.cartId);
// // //       setCartEmpty(false);
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     handleGettingUserCart();
// // //   }, []);

// // //   async function makeCashOrder() {
// // //     if (!cartId) {
// // //       toast.error('Your cart is empty! Please add products first.');
// // //       return;
// // //     }

// // //     const address = {
// // //       details: detailsInput.current?.value || '',
// // //       phone: phoneInput.current?.value || '',
// // //       city: cityInput.current?.value || '',
// // //     };

// // //     const isSuccessed = await createCashOrder(cartId, address);

// // //     if (isSuccessed) {
// // //       toast.success('Order created successfully');
// // //       updateCartCount(0);
// // //     } else {
// // //       toast.error('Error occurred while creating order');
// // //     }
// // //   }

// // //   async function makeOnlineOrder() {
// // //     if (!cartId) {
// // //       toast.error('Your cart is empty! Please add products first.');
// // //       return;
// // //     }

// // //     const address = {
// // //       details: detailsInput.current?.value || '',
// // //       phone: phoneInput.current?.value || '',
// // //       city: cityInput.current?.value || '',
// // //     };

// // //     const res = await createCheckoutSession(cartId, address);

// // //     if (res === false) {
// // //       toast.error('Error in make online order');
// // //     } else {
// // //       window.open(res, '_self');
// // //     }
// // //   }

// // //   // 🛒 لو الكارت فاضية
// // //   if (cartEmpty) {
// // //     return (
// // //       <div className="text-center mt-10">
// // //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
// // //           Your cart is empty 🛒
// // //         </h2>
// // //         <p className="text-gray-500 mt-2">
// // //           Please add products before proceeding to payment.
// // //         </p>
// // //       </div>
// // //     );
// // //   }

// // //   // ✅ لو الكارت فيها منتجات
// // //   return (
// // //     <div className="w-1/2 mx-auto mt-6">
// // //       <div>
// // //         <Label>City</Label>
// // //         <Input ref={cityInput} />
// // //       </div>
// // //       <div>
// // //         <Label>Phone</Label>
// // //         <Input type="tel" ref={phoneInput} />
// // //       </div>
// // //       <div>
// // //         <Label>Details</Label>
// // //         <Input ref={detailsInput} />
// // //       </div>

// // //       <Button onClick={makeCashOrder} className="cursor-pointer mt-3">
// // //         Make Cash Order
// // //       </Button>

// // //       <Button onClick={makeOnlineOrder} className="cursor-pointer mt-3 ml-3">
// // //         Make Online Order
// // //       </Button>
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import React, { useContext, useEffect, useRef, useState } from 'react';
// // import { createCashOrder, createCheckoutSession } from './order.actions';
// // import { getUserCartSer } from '@/app/_services/cart.services';
// // import { toast } from 'sonner';
// // import { CartContext } from '../CartContext';

// // export default function Payment() {
// //   const { updateCartCount } = useContext(CartContext);
// //   const cityInput = useRef<HTMLInputElement>(null);
// //   const phoneInput = useRef<HTMLInputElement>(null);
// //   const detailsInput = useRef<HTMLInputElement>(null);

// //   const [cartId, setCartId] = useState<string | null>(null);
// //   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null); // null = loading

// //   async function handleGettingUserCart() {
// //     const res = await getUserCartSer();

// //     if (!res || res.numOfCartItems === 0) {
// //       setCartEmpty(true);
// //     } else {
// //       setCartId(res.cartId);
// //       setCartEmpty(false);
// //     }
// //   }

// //   useEffect(() => {
// //     handleGettingUserCart();
// //   }, []);

// //   async function makeCashOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const isSuccessed = await createCashOrder(cartId, address);

// //     if (isSuccessed) {
// //       toast.success('Order created successfully');
// //       updateCartCount(0);
// //     } else {
// //       toast.error('Error occurred while creating order');
// //     }
// //   }

// //   async function makeOnlineOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const res = await createCheckoutSession(cartId, address);

// //     if (res === false) {
// //       toast.error('Error in make online order');
// //     } else {
// //       window.open(res, '_self');
// //     }
// //   }

// //   // 🕐 حالة التحميل (قبل ما نعرف الكارت فيها حاجة ولا لا)
// //   if (cartEmpty === null) {
// //     return (
// //       <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
// //         Loading your cart...
// //       </div>
// //     );
// //   }

// //   // 🛒 لو الكارت فاضية
// //   if (cartEmpty === true) {
// //     return (
// //       <div className="text-center mt-10">
// //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
// //           Your cart is empty 🛒
// //         </h2>
// //         <p className="text-gray-500 mt-2">
// //           Please add products before proceeding to payment.
// //         </p>
// //         <Button
// //           onClick={() => (window.location.href = '/')}
// //           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
// //         >
// //           Go to Shop
// //         </Button>
// //       </div>
// //     );
// //   }

// //   // ✅ لو الكارت فيها منتجات
// //   return (
// //     <div className="w-1/2 mx-auto mt-6">
// //       <div>
// //         <Label>City</Label>
// //         <Input ref={cityInput} />
// //       </div>
// //       <div>
// //         <Label>Phone</Label>
// //         <Input type="tel" ref={phoneInput} />
// //       </div>
// //       <div>
// //         <Label>Details</Label>
// //         <Input ref={detailsInput} />
// //       </div>

// //       <Button onClick={makeCashOrder} className="cursor-pointer mt-3">
// //         Make Cash Order
// //       </Button>

// //       <Button onClick={makeOnlineOrder} className="cursor-pointer mt-3 ml-3">
// //         Make Online Order
// //       </Button>
// //     </div>
// //   );
// // }
// // 'use client';

// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import React, { useContext, useEffect, useRef, useState } from 'react';
// // import { createCashOrder, createCheckoutSession } from './order.actions';
// // import { getUserCartSer } from '@/app/_services/cart.services';
// // import { toast } from 'sonner';
// // import { CartContext } from '../CartContext';

// // export default function Payment() {
// //   const { updateCartCount } = useContext(CartContext);
// //   const cityInput = useRef<HTMLInputElement>(null);
// //   const phoneInput = useRef<HTMLInputElement>(null);
// //   const detailsInput = useRef<HTMLInputElement>(null);

// //   const [cartId, setCartId] = useState<string | null>(null);
// //   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);

// //   async function handleGettingUserCart() {
// //     const res = await getUserCartSer();

// //     if (!res || res.numOfCartItems === 0) {
// //       setCartEmpty(true);
// //     } else {
// //       setCartId(res.cartId);
// //       setCartEmpty(false);
// //     }
// //   }

// //   useEffect(() => {
// //     handleGettingUserCart();
// //   }, []);

// //   async function makeCashOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const isSuccessed = await createCashOrder(cartId, address);

// //     if (isSuccessed) {
// //       toast.success('Order created successfully');
// //       updateCartCount(0);
// //     } else {
// //       toast.error('Error occurred while creating order');
// //     }
// //   }

// //   async function makeOnlineOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const res = await createCheckoutSession(cartId, address);

// //     if (res === false) {
// //       toast.error('Error in make online order');
// //     } else {
// //       window.open(res, '_self');
// //     }
// //   }

// //   if (cartEmpty === true) {
// //     return (
// //       <div className="text-center mt-10">
// //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
// //           Your cart is empty 🛒
// //         </h2>
// //         <p className="text-gray-500 mt-2">
// //           Please add products before proceeding to payment.
// //         </p>
// //         <Button
// //           onClick={() => (window.location.href = '/')}
// //           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
// //         >
// //           Go to Shop
// //         </Button>
// //       </div>
// //     );
// //   }

// //   if (cartEmpty === null) return null; // 🧠 هنخلي اللودينج يظهر من الملف المنفصل

// //   return (
// //     <div className="w-1/2 mx-auto mt-6">
// //       <div>
// //         <Label>City</Label>
// //         <Input ref={cityInput} />
// //       </div>
// //       <div>
// //         <Label>Phone</Label>
// //         <Input type="tel" ref={phoneInput} />
// //       </div>
// //       <div>
// //         <Label>Details</Label>
// //         <Input ref={detailsInput} />
// //       </div>

// //       <Button onClick={makeCashOrder} className="cursor-pointer mt-3">
// //         Make Cash Order
// //       </Button>

// //       <Button onClick={makeOnlineOrder} className="cursor-pointer mt-3 ml-3">
// //         Make Online Order
// //       </Button>
// //     </div>
// //   );
// // }


// // 'use client';

// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import React, { useContext, useEffect, useRef, useState } from 'react';
// // import { createCashOrder, createCheckoutSession } from './order.actions';
// // import { getUserCartSer } from '@/app/_services/cart.services';
// // import { toast } from 'sonner';
// // import { CartContext } from '../CartContext';

// // export default function Payment() {
// //   const { updateCartCount } = useContext(CartContext);
// //   const cityInput = useRef<HTMLInputElement>(null);
// //   const phoneInput = useRef<HTMLInputElement>(null);
// //   const detailsInput = useRef<HTMLInputElement>(null);

// //   const [cartId, setCartId] = useState<string | null>(null);
// //   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);

// //   async function handleGettingUserCart() {
// //     const res = await getUserCartSer();

// //     if (!res || res.numOfCartItems === 0) {
// //       setCartEmpty(true);
// //     } else {
// //       setCartId(res.cartId);
// //       setCartEmpty(false);
// //     }
// //   }

// //   useEffect(() => {
// //     handleGettingUserCart();
// //   }, []);

// //   async function makeCashOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const isSuccessed = await createCashOrder(cartId, address);

// //     if (isSuccessed) {
// //       toast.success('Order created successfully');
// //       updateCartCount(0);
// //     } else {
// //       toast.error('Error occurred while creating order');
// //     }
// //   }

// //   async function makeOnlineOrder() {
// //     if (!cartId) {
// //       toast.error('Your cart is empty! Please add products first.');
// //       return;
// //     }

// //     const address = {
// //       details: detailsInput.current?.value || '',
// //       phone: phoneInput.current?.value || '',
// //       city: cityInput.current?.value || '',
// //     };

// //     const res = await createCheckoutSession(cartId, address);

// //     if (res === false) {
// //       toast.error('Error in make online order');
// //     } else {
// //       window.open(res, '_self');
// //     }
// //   }

// //   // 🌀 اللودينج أثناء فحص الكارت
// //   if (cartEmpty === null) {
// //     return (
// //       <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
// //         <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
// //         <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
// //           Loading Cart...
// //         </p>
// //       </div>
// //     );
// //   }

// //   // 🛒 لو الكارت فاضية
// //   if (cartEmpty === true) {
// //     return (
// //       <div className="text-center mt-10">
// //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
// //           Your cart is empty 🛒
// //         </h2>
// //         <p className="text-gray-500 mt-2">
// //           Please add products before proceeding to payment.
// //         </p>
// //         <Button
// //           onClick={() => (window.location.href = '/')}
// //           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
// //         >
// //           Go to Shop
// //         </Button>
// //       </div>
// //     );
// //   }

// //   // ✅ لو الكارت فيها منتجات
// //   return (
// //     <div className="w-1/2 mx-auto mt-6">
// //       <div>
// //         <Label>City</Label>
// //         <Input ref={cityInput} />
// //       </div>
// //       <div>
// //         <Label>Phone</Label>
// //         <Input type="tel" ref={phoneInput} />
// //       </div>
// //       <div>
// //         <Label>Details</Label>
// //         <Input ref={detailsInput} />
// //       </div>

// //       <Button onClick={makeCashOrder} className="cursor-pointer mt-3">
// //         Make Cash Order
// //       </Button>

// //       <Button onClick={makeOnlineOrder} className="cursor-pointer mt-3 ml-3">
// //         Make Online Order
// //       </Button>
// //     </div>
// //   );
// // }
// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { createCashOrder, createCheckoutSession } from './order.actions';
// import { getUserCartSer } from '@/app/_services/cart.services';
// import { toast } from 'sonner';
// import { CartContext } from '../CartContext';

// export default function Payment() {
//   const { updateCartCount } = useContext(CartContext);
//   const cityInput = useRef<HTMLInputElement>(null);
//   const phoneInput = useRef<HTMLInputElement>(null);
//   const detailsInput = useRef<HTMLInputElement>(null);

//   const [cartId, setCartId] = useState<string | null>(null);
//   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);

//   async function handleGettingUserCart() {
//     const res = await getUserCartSer();

//     if (!res || res.numOfCartItems === 0) {
//       setCartEmpty(true);
//     } else {
//       setCartId(res.cartId);
//       setCartEmpty(false);
//     }
//   }

//   useEffect(() => {
//     handleGettingUserCart();
//   }, []);

//   async function makeCashOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const isSuccessed = await createCashOrder(cartId, address);

//     if (isSuccessed) {
//       toast.success('Order created successfully');
//       updateCartCount(0);
//     } else {
//       toast.error('Error occurred while creating order');
//     }
//   }

//   async function makeOnlineOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const res = await createCheckoutSession(cartId, address);

//     if (res === false) {
//       toast.error('Error in make online order');
//     } else {
//       window.open(res, '_self');
//     }
//   }

//   // 🌀 اللودينج أثناء فحص الكارت
//   if (cartEmpty === null) {
//     return (
//       <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
//         <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
//         <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
//           Loading Cart...
//         </p>
//       </div>
//     );
//   }

//   // 🛒 لو الكارت فاضية
//   if (cartEmpty === true) {
//     return (
//       <div className="text-center mt-10">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           Your cart is empty 🛒
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Please add products before proceeding to payment.
//         </p>
//         <Button
//           onClick={() => (window.location.href = '/')}
//           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
//         >
//           Go to Shop
//         </Button>
//       </div>
//     );
//   }

//   // ✅ لو الكارت فيها منتجات
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
//           🧾 Complete Your Order
//         </h1>

//         <div className="space-y-4">
//           <div>
//             <Label className="text-gray-700 dark:text-gray-300">City</Label>
//             <Input
//               ref={cityInput}
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 rounded-lg shadow-sm"
//             />
//           </div>
//           <div>
//             <Label className="text-gray-700 dark:text-gray-300">Phone</Label>
//             <Input
//               type="tel"
//               ref={phoneInput}
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 rounded-lg shadow-sm"
//             />
//           </div>
//           <div>
//             <Label className="text-gray-700 dark:text-gray-300">Details</Label>
//             <Input
//               ref={detailsInput}
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 rounded-lg shadow-sm"
//             />
//           </div>
//         </div>

//         <div className="flex justify-between mt-6">
//           <Button
//             onClick={makeCashOrder}
//             className="bg-green-600 hover:bg-green-700 text-white px-6"
//           >
//             💵 Cash Order
//           </Button>

//           <Button
//             onClick={makeOnlineOrder}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6"
//           >
//             💳 Online Order
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { createCashOrder, createCheckoutSession } from './order.actions';
// import { getUserCartSer } from '@/app/_services/cart.services';
// import { toast } from 'sonner';
// import { CartContext } from '../CartContext';

// export default function Payment() {
//   const { updateCartCount } = useContext(CartContext);
//   const cityInput = useRef<HTMLInputElement>(null);
//   const phoneInput = useRef<HTMLInputElement>(null);
//   const detailsInput = useRef<HTMLInputElement>(null);

//   const [cartId, setCartId] = useState<string | null>(null);
//   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);

//   async function handleGettingUserCart() {
//     const res = await getUserCartSer();

//     if (!res || res.numOfCartItems === 0) {
//       setCartEmpty(true);
//     } else {
//       setCartId(res.cartId);
//       setCartEmpty(false);
//     }
//   }

//   useEffect(() => {
//     handleGettingUserCart();
//   }, []);

//   async function makeCashOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const isSuccessed = await createCashOrder(cartId, address);

//     if (isSuccessed) {
//       toast.success('Order created successfully');
//       updateCartCount(0);
//     } else {
//       toast.error('Error occurred while creating order');
//     }
//   }

//   async function makeOnlineOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const res = await createCheckoutSession(cartId, address);

//     if (res === false) {
//       toast.error('Error in make online order');
//     } else {
//       window.open(res, '_self');
//     }
//   }

//   // 🌀 اللودينج أثناء فحص الكارت
//   if (cartEmpty === null) {
//     return (
//       <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
//         <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
//         <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
//           Loading Cart...
//         </p>
//       </div>
//     );
//   }

//   // 🛒 لو الكارت فاضية
//   if (cartEmpty === true) {
//     return (
//       <div className="text-center mt-10">
//         <i className="fa-solid fa-cart-shopping text-4xl text-gray-600 mb-3"></i>
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           Your cart is empty
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Please add products before proceeding to payment.
//         </p>
//         <Button
//           onClick={() => (window.location.href = '/')}
//           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
//         >
//           Go to Shop
//         </Button>
//       </div>
//     );
//   }

//   // ✅ لو الكارت فيها منتجات
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg transition-transform duration-300 hover:scale-[1.02]">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6 flex items-center justify-center gap-2">
//           <i className="fa-solid fa-credit-card text-green-600"></i> Payment Details
//         </h2>

//         <div className="space-y-5">
//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">City</Label>
//             <Input
//               ref={cityInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//             />
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Phone</Label>
//             <Input
//               type="tel"
//               ref={phoneInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//             />
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Details</Label>
//             <Input
//               ref={detailsInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-center gap-4">
//           <Button
//             onClick={makeCashOrder}
//             className="cursor-pointer bg-green-600 hover:bg-green-700 text-white"
//           >
//             <i className="fa-solid fa-money-bill-wave mr-2"></i> Cash Order
//           </Button>

//           <Button
//             onClick={makeOnlineOrder}
//             className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             <i className="fa-solid fa-globe mr-2"></i> Online Order
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { createCashOrder, createCheckoutSession } from './order.actions';
// import { getUserCartSer } from '@/app/_services/cart.services';
// import { toast } from 'sonner';
// import { CartContext } from '../CartContext';

// export default function Payment() {
//   const { updateCartCount } = useContext(CartContext);
//   const cityInput = useRef<HTMLInputElement>(null);
//   const phoneInput = useRef<HTMLInputElement>(null);
//   const detailsInput = useRef<HTMLInputElement>(null);

//   const [cartId, setCartId] = useState<string | null>(null);
//   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);

//   async function handleGettingUserCart() {
//     const res = await getUserCartSer();

//     if (!res || res.numOfCartItems === 0) {
//       setCartEmpty(true);
//     } else {
//       setCartId(res.cartId);
//       setCartEmpty(false);
//     }
//   }

//   useEffect(() => {
//     handleGettingUserCart();
//   }, []);

//   function validateInputs() {
//     const city = cityInput.current?.value.trim();
//     const phone = phoneInput.current?.value.trim();
//     const details = detailsInput.current?.value.trim();

//     // ✅ Check empty inputs
//     if (!city || !phone || !details) {
//       toast.error('Please fill in all fields.');
//       return false;
//     }

//     // ✅ Validate Egyptian phone number
//     const egyptPhoneRegex = /^01[0125][0-9]{8}$/;
//     if (!egyptPhoneRegex.test(phone)) {
//       toast.error('Please enter a valid Egyptian phone number (e.g. 01012345678).');
//       return false;
//     }

//     return true;
//   }

//   async function makeCashOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     if (!validateInputs()) return;

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const isSuccessed = await createCashOrder(cartId, address);

//     if (isSuccessed) {
//       toast.success('Order created successfully');
//       updateCartCount(0);
//     } else {
//       toast.error('Error occurred while creating order');
//     }
//   }

//   async function makeOnlineOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     if (!validateInputs()) return;

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const res = await createCheckoutSession(cartId, address);

//     if (res === false) {
//       toast.error('Error in make online order');
//     } else {
//       window.open(res, '_self');
//     }
//   }

//   // 🌀 Loading state
//   if (cartEmpty === null) {
//     return (
//       <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
//         <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
//         <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">Loading Cart...</p>
//       </div>
//     );
//   }

//   // 🛒 Empty cart
//   if (cartEmpty === true) {
//     return (
//       <div className="text-center mt-10">
//         <i className="fa-solid fa-cart-shopping text-4xl text-gray-600 mb-3"></i>
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           Your cart is empty
//         </h2>
//         <p className="text-gray-500 mt-2">Please add products before proceeding to payment.</p>
//         <Button
//           onClick={() => (window.location.href = '/')}
//           className="mt-4 bg-green-600 hover:bg-green-700 text-white"
//         >
//           Go to Shop
//         </Button>
//       </div>
//     );
//   }

//   // ✅ Form section
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg transition-transform duration-300 hover:scale-[1.02]">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6 flex items-center justify-center gap-2">
//           <i className="fa-solid fa-credit-card text-green-600"></i> Payment Details
//         </h2>

//         <div className="space-y-5">
//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">City</Label>
//             <Input
//               ref={cityInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//               placeholder="Enter your city"
//             />
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Phone</Label>
//             <Input
//               type="tel"
//               ref={phoneInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//               placeholder="e.g. 01012345678"
//             />
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Details</Label>
//             <Input
//               ref={detailsInput}
//               className="mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
//               placeholder="Address details"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-center gap-4">
//           <Button
//             onClick={makeCashOrder}
//             className="cursor-pointer bg-green-600 hover:bg-green-700 text-white"
//           >
//             <i className="fa-solid fa-money-bill-wave mr-2"></i> Cash Order
//           </Button>

//           <Button
//             onClick={makeOnlineOrder}
//             className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             <i className="fa-solid fa-globe mr-2"></i> Online Order
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


//////////////////////////////////////////////
// 'use client';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { createCashOrder, createCheckoutSession } from './order.actions';
// import { getUserCartSer } from '@/app/_services/cart.services';
// import { toast } from 'sonner';
// import { CartContext } from '../CartContext';

// export default function Payment() {
//   const { updateCartCount } = useContext(CartContext);
//   const cityInput = useRef<HTMLInputElement>(null);
//   const phoneInput = useRef<HTMLInputElement>(null);
//   const detailsInput = useRef<HTMLInputElement>(null);

//   const [cartId, setCartId] = useState<string | null>(null);
//   const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);
//   const [errors, setErrors] = useState({ city: '', phone: '', details: '' });

//   async function handleGettingUserCart() {
//     const res = await getUserCartSer();

//     if (!res || res.numOfCartItems === 0) {
//       setCartEmpty(true);
//     } else {
//       setCartId(res.cartId);
//       setCartEmpty(false);
//     }
//   }

//   useEffect(() => {
//     handleGettingUserCart();
//   }, []);

//   function validateInputs() {
//     const city = cityInput.current?.value.trim() || '';
//     const phone = phoneInput.current?.value.trim() || '';
//     const details = detailsInput.current?.value.trim() || '';

//     const newErrors = { city: '', phone: '', details: '' };
//     let valid = true;

//     if (!city) {
//       newErrors.city = 'City is required.';
//       valid = false;
//     }
//     if (!phone) {
//       newErrors.phone = 'Phone number is required.';
//       valid = false;
//     } else if (!/^01[0125][0-9]{8}$/.test(phone)) {
//       newErrors.phone = 'Please enter a valid Egyptian phone number.';
//       valid = false;
//     }
//     if (!details) {
//       newErrors.details = 'Address details are required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   }

//   async function makeCashOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     if (!validateInputs()) return;

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const isSuccessed = await createCashOrder(cartId, address);

//     if (isSuccessed) {
//       toast.success('Order created successfully');
//       updateCartCount(0);
//     } else {
//       toast.error('Error occurred while creating order');
//     }
//   }

//   async function makeOnlineOrder() {
//     if (!cartId) {
//       toast.error('Your cart is empty! Please add products first.');
//       return;
//     }

//     if (!validateInputs()) return;

//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || '',
//     };

//     const res = await createCheckoutSession(cartId, address);

//     if (res === false) {
//       toast.error('Error in make online order');
//     } else {
//       window.open(res, '_self');
//     }
//   }

//   // 🌀 Loading
//   if (cartEmpty === null) {
//     return (
//       <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
//         <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
//         <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">Loading Cart...</p>
//       </div>
//     );
//   }

//   // 🛒 Empty cart
//   if (cartEmpty === true) {
//     return (
   
//   <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900">
//     <i className="fa-solid fa-cart-shopping text-5xl text-gray-600 mb-3"></i>
//     <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//       Your cart is empty
//     </h2>
//     <p className="text-gray-500 mt-2">
//       Please add products before proceeding to payment.
//     </p>
//     <Button
//       onClick={() => (window.location.href = '/')}
//       className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
//     >
//       <i className="fa-solid fa-store mr-2"></i> Go to Shop
//     </Button>
//   </div>
// );

//   }

//   // ✅ Form
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg transition-transform duration-300 hover:scale-[1.02]">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6 flex items-center justify-center gap-2">
//           <i className="fa-solid fa-credit-card text-green-600"></i> Payment Details
//         </h2>

//         <div className="space-y-5">
//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">City</Label>
//             <Input
//               ref={cityInput}
//               className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
//                 errors.city && 'border-red-500'
//               }`}
//               placeholder="Enter your city"
//             />
//             {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Phone</Label>
//             <Input
//               type="tel"
//               ref={phoneInput}
//               className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
//                 errors.phone && 'border-red-500'
//               }`}
//               placeholder="e.g. 01012345678"
//             />
//             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <Label className="text-gray-700 dark:text-gray-200">Details</Label>
//             <Input
//               ref={detailsInput}
//               className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
//                 errors.details && 'border-red-500'
//               }`}
//               placeholder="Address details"
//             />
//             {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
//           </div>
//         </div>

//         <div className="mt-6 flex justify-center gap-4">
//           <Button
//             onClick={makeCashOrder}
//             className="cursor-pointer bg-green-600 hover:bg-green-700 text-white"
//           >
//             <i className="fa-solid fa-money-bill-wave mr-2"></i> Cash Order
//           </Button>

//           <Button
//             onClick={makeOnlineOrder}
//             className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
//           >
//             <i className="fa-solid fa-globe mr-2"></i> Online Order
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }





















/////////////////////////////////////////

// 'use client'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { createCashOrder, createCheckoutSession } from './order.actions'
// import { getUserCartSer } from '@/app/_services/cart.services'
// import { toast } from 'sonner'
// import { CartContext } from '../CartContext'

// export default function Payment() {

//   const {updateCartCount} = useContext(CartContext)

//   const cityInput = useRef<HTMLInputElement>(null);
//   const phoneInput = useRef<HTMLInputElement>(null);
//   const detailsInput = useRef<HTMLInputElement>(null);

//   const [cartId, setCartId] = useState<null | string>(null)

//   async function handleGettingUserCart() {
//     const res = await getUserCartSer();
//     setCartId(res.cartId)
//   }


//  useEffect(function(){
//     handleGettingUserCart()
//   },[])


//   async function makeCashOrder(){
    
//     const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || ''
//     }
//     const isSuccessed = await createCashOrder(cartId || '',address)
//     if(isSuccessed){
//       toast.success("Order created successfully")
//       updateCartCount(0);

//     }
//     else{
//       toast.error("Error occured while creating order")
//     }


//   }


//  async function makeOnlineOrder(){
//      const address = {
//       details: detailsInput.current?.value || '',
//       phone: phoneInput.current?.value || '',
//       city: cityInput.current?.value || ''
//     }
//     const res = await createCheckoutSession(cartId || '', address)
//     if(res == false){
//       toast.error("error in make online order")
//     }
//     else{
//       window.open(res , "_self")
//     }
//   }



//   return (
//     <div className='w-1/2 mx-auto'>
//        <div>
//          <Label>City</Label>
//         <Input ref={cityInput}/>
//        </div>

//        <div>
//          <Label>Phone</Label>
//         <Input type='tel' ref={phoneInput}/>
//        </div>

//        <div>
//          <Label>Details</Label>
//         <Input ref={detailsInput}/>
//        </div>
       

//        <Button  onClick={makeCashOrder} className='cursor-pointer mt-3'>
//         Make Cash order
//        </Button>
//        <Button  onClick={makeOnlineOrder} className='cursor-pointer mt-3'>
//         Make Online order
//        </Button>

//     </div>
//   )
// }

//////////////////////////////



'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { createCashOrder, createCheckoutSession } from './order.actions';
import { getUserCartSer } from '@/app/_services/cart.services';
import { toast } from 'sonner';
import { CartContext } from '../CartContext';

export default function Payment() {
  const { updateCartCount } = useContext(CartContext);
  const cityInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const detailsInput = useRef<HTMLInputElement>(null);

  const [cartId, setCartId] = useState<string | null>(null);
  const [cartEmpty, setCartEmpty] = useState<boolean | null>(null);
  const [errors, setErrors] = useState({ city: '', phone: '', details: '' });

  // 🧾 Fetch cart info
  async function handleGettingUserCart() {
    try {
      const res = await getUserCartSer();

      if (!res || res.numOfCartItems === 0) {
        setCartEmpty(true);
      } else {
        setCartId(res.cartId);
        setCartEmpty(false);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
      toast.error('Failed to fetch your cart. Please try again.');
      setCartEmpty(true);
    }
  }

  useEffect(() => {
    handleGettingUserCart();
  }, []);

  // ✅ Input validation
  function validateInputs() {
    const city = cityInput.current?.value.trim() || '';
    const phone = phoneInput.current?.value.trim() || '';
    const details = detailsInput.current?.value.trim() || '';

    const newErrors = { city: '', phone: '', details: '' };
    let valid = true;

    if (!city) {
      newErrors.city = 'City is required.';
      valid = false;
    }
    if (!phone) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    } else if (!/^01[0125][0-9]{8}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid Egyptian phone number.';
      valid = false;
    }
    if (!details) {
      newErrors.details = 'Address details are required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  // 💵 Cash Order
  async function makeCashOrder() {
    if (!cartId) {
      toast.error('Your cart is empty or not loaded yet.');
      return;
    }

    if (!validateInputs()) return;

    const address = {
      details: detailsInput.current?.value || '',
      phone: phoneInput.current?.value || '',
      city: cityInput.current?.value || '',
    };

    const isSuccessed = await createCashOrder(cartId, address);

    if (isSuccessed) {
      toast.success('Order created successfully');
      updateCartCount(0);
    } else {
      toast.error('Error occurred while creating order');
    }
  }

  // 🌐 Online Order
  async function makeOnlineOrder() {
    if (!cartId) {
      toast.error('Your cart is empty or not loaded yet.');
      return;
    }

    if (!validateInputs()) return;

    const address = {
      details: detailsInput.current?.value || '',
      phone: phoneInput.current?.value || '',
      city: cityInput.current?.value || '',
    };

    console.log('🛒 Sending checkout with cartId:', cartId);

    const res = await createCheckoutSession(cartId, address);

    if (res === false) {
      toast.error('Error in make online order');
    } else {
      window.open(res, '_self');
    }
  }

  // 🌀 Loading
  if (cartEmpty === null) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
        <i className="fa-solid fa-bag-shopping text-6xl text-green-600 animate-bounce"></i>
        <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
          Loading Cart...
        </p>
      </div>
    );
  }

  // 🛒 Empty cart
  if (cartEmpty === true) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900">
        <i className="fa-solid fa-cart-shopping text-5xl text-gray-600 mb-3"></i>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2">
          Please add products before proceeding to payment.
        </p>
        <Button
          onClick={() => (window.location.href = '/')}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
        >
          <i className="fa-solid fa-store mr-2"></i> Go to Shop
        </Button>
      </div>
    );
  }

  // ✅ Form
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6 flex items-center justify-center gap-2">
          <i className="fa-solid fa-credit-card text-green-600"></i> Payment Details
        </h2>

        <div className="space-y-5">
          {/* City */}
          <div>
            <Label className="text-gray-700 dark:text-gray-200">City</Label>
            <Input
              ref={cityInput}
              className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
                errors.city && 'border-red-500'
              }`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label className="text-gray-700 dark:text-gray-200">Phone</Label>
            <Input
              type="tel"
              ref={phoneInput}
              className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
                errors.phone && 'border-red-500'
              }`}
              placeholder="e.g. 01012345678"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Details */}
          <div>
            <Label className="text-gray-700 dark:text-gray-200">Details</Label>
            <Input
              ref={detailsInput}
              className={`mt-1 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 hover:border-green-400 transition-all duration-200 ${
                errors.details && 'border-red-500'
              }`}
              placeholder="Address details"
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={makeCashOrder}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white"
          >
            <i className="fa-solid fa-money-bill-wave mr-2"></i> Cash Order
          </Button>

          {cartId && (
            <Button
              onClick={makeOnlineOrder}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
            >
              <i className="fa-solid fa-globe mr-2"></i> Online Order
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
