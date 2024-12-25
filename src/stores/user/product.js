import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        list: [{
            name: 'shoes01',
            imageUrl: 'https://www.kito.co.th/wp-content/uploads/2024/10/BE26red_0.jpg',
            quantity: 10,
            about: 'ร้องเท้า KITO BE26',
            status: 'open',
            price: 469,
        },
        {
            name: 'shoes02',
            imageUrl: 'https://www.kito.co.th/wp-content/uploads/2024/08/AC36_oat_0.jpg',
            quantity: 10,
            about: 'ร้องเท้า KITO AC36',
            status: 'open',
            price: 459,
        },
        {
            name: 'shoes03',
            imageUrl: 'https://th.mlb-korea.com/cdn/shop/products/8809903863321_01_JPG_626ca403-a736-4768-a306-0e7dd83cb9e6.jpg?v=1688089018',
            quantity: 10,
            about: 'รองเท้าผ้าใบ Chunky Liner Basic New York Yankees',
            status: 'open',
            price:3672,
        },
        {
            name: 'shoes04',
            imageUrl: 'https://th.mlb-korea.com/cdn/shop/files/8809792834358_01_JPG_aff578aa-c061-43e9-95eb-b98834fb065b.jpg?v=1721201013',
            quantity: 10,
            about: 'รองเท้าผ้าใบ Big Ball Chunky Mono Lt New York Yankees Sneaker',
            status: 'open',
            price:2645,
        },
        {
            name: 'shoes05',
            imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393833/01/sv01/fnd/THA/fmt/png',
            quantity: 10,
            about: 'รองเท้าผ้าใบ Rebound V6 Lo Youth',
            status: 'open',
            price:900,
        },
        {
            name: 'shoes06',
            imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/370492/16/sv01/fnd/THA/fmt/png',
            quantity: 10,
            about: 'รองเท้าออกกำลังเด็ก Rebound Lay-Up Lo V',
            status: 'open',
            price:700,
        },
        {
            name: 'shoes07',
            imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/392484/01/sv01/fnd/THA/fmt/png',
            quantity: 10,
            about: 'รองเท้าผ้าใบ Rebound Low 75 ปี',
            status: 'open',
            price:1250,
        },
        {
            name: 'shoes08',
            imageUrl: 'https://ik.imagekit.io/onenow/seven/1716802799.rDG3kdNfrLF1dMIcjxnkdC5xIXYNA37I.jpeg?tr=f-auto,pr-true,ar-1-1,w-1200,fo-auto',
            quantity: 10,
            about: 'ADIDAS รองเท้ากีฬาลำลองผู้หญิง รุ่น VL COURT 3.0',
            status: 'open',
            price:2000,
        },
        {
            name: 'shirt01',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2V29V896C.07MR_1_FW24_P1_W_V2.jpg?twic=v1/cover=1:1/resize-max=480',
            quantity: 10,
            about: 'เสื้อแจ็กเก็ตวาร์ซิตี้เท็ดดี้ผ้าวูลเนื้อไม่เรียบ',
            status: 'open',
            price: 120000,
        },
        {
            name: 'shirt02',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/RY04I345F.38AW_1_FW24_P1_M.jpg?twic=v1/cover=1:1/resize-max=720',
            quantity: 20,
            about: 'เสื้อฮู้ดพร้อมซิปผ้าคอตตอนฟลีซ',
            status: 'open',
            price: 65000,
        },
        {
            name: 'shirt03',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2V56D896C.38NO_1_WIN22_V9.jpg?twic=v1/cover=1:1/resize-max=900',
            quantity: 10,
            about: 'เสื้อเท็ดดี้แจ็กเก็ตทรงคลาสสิก ผ้าวูล',
            status: 'open',
            price: 120000,
        },
        {
            name: 'shirt04',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2Q858930F.07UW_1_FW23_W.jpg?twic=v1/cover=1:1/resize-max=900',
            quantity: 10,
            about: 'แจ็คเก็ตทรัคเกอร์พร้อมฮูดผ้าเดนิมฟอกยูเนียนวอช',
            status: 'open',
            price: 65000,
        },
        {
            name: 'shirt05',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2W87C426Z.39NI_1_FW24_P1_M_V2.jpg?twic=v1/cover=1:1/resize-max=480',
            quantity: 10,
            about: 'เสื้อแจ็กเก็ตทรียงฟ์บลูซงผ้าวูลลายพรินซ์ออฟเวลส์',
            status: 'open',
            price: 92000,
        },
        {
            name: 'shirt06',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2Y14H121O.38EC_1_FW24_P1_M.jpg?twic=v1/cover=1:1/resize-max=480',
            quantity: 10,
            about: 'เสื้อแจ็กเก็ตแทร็กสูทผ้าเจอร์ซีย์แบบสองด้าน',
            status: 'open',
            price: 64000,
        },  
        {
            name: 'shirt07',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2Q472947F.38CH_1_FW23_M_V2.jpg?twic=v1/cover=1:1/resize-max=480',
            quantity: 10,
            about: 'เสื้อแจ็กเก็ตทรักเกอร์ผ้าเดนิมชาร์โคลวอช',
            status: 'open',
            price: 65000,
        },
        {
            name: 'shirt08',
            imageUrl: 'https://twicpics.celine.com/product-prd/images/large/2Y30H699M.38AW_1_FW24_P1_M_V2.jpg?twic=v1/cover=1:1/resize-max=480',
            quantity: 10,
            about: 'แจ็กเก็ตแบบมีฮู้ด Celine ผ้าเจอร์ซีย์ฟลีซ',
            status: 'open',
            price:  79000,
        }]
    }),
    actions: {
        filterProduct (searchText) {
            return this.list.filter(product => product.name.includes(searchText))
        }
    }
})