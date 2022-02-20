interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1.
// 상품 목록을 받아오는 api 함수
// function fetchProducts(): Promise<Product []> {
// }

// Partial: 특정 타입의 부분을 허용하는 타입 (optional ?: 과 동일)
// Pick: 기존의 타입에서 일부 요소만 사용하는 새로운 타입
// Omit: 기존의 타입에서 일부 요소만 제거한 새로운 타입

// 2.
// 유틸리티 Pick을 쓰는 방법
// 특정 상품의 상세 정보를 나타내기 위한 함수
// type ShoppintgItem = Pick<Product, 'id' | 'name' | 'price'>
// function displayProductDetail(shoppingItem: ShoppintgItem) {
// }


// 2.
// 새로운 인터페이스를 만드는 방법
interface ProductDetail {
    id: number;
    name: string;
    pricde: number;
}
function displayProductDetail(shoppingItem: ProductDetail) {
}


// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// Product의 일부 정보만 가지는 타입을 받음
// => 위 처럼 모든 속성에 optional 처리를 할 수 있지만 Partial을 활용할 수 있음
function updateProductItem(productItem: UpdateProduct){

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl']
// }

// #2 mapped 타입으로 #1을 축약
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile

// #3 keyof 연산을 통해 #2 축약
// type UserProfileUpdate = {
//     [p in keyof UserProfile]?: UserProfile[p]
// }

// #4 제네릭을 통해 #3 축약. Partial의 구현체 
type Subset<T> = {
    [p in keyof T] ?: T[p]
}
