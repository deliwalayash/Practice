let arr=[1,2,3,4,5]
let newarr=[6,...arr]
console.log(newarr)
let arr1=[1,2,3,4,5,6]
let arr2=[4,5,6,7,8,9]

const ans=arr1.filter(item =>arr2.includes(item))
console.log(ans)

const response = {
  data: {
    id: 1,
    email: "test@gmail.com",
    token: "abc123"
  }
};

const { email, token } = response.data;

console.log(email)
console.log(token)