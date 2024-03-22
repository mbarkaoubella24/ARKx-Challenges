async function fetchUsersData(){
    try {
        const res = await fetch('https://dummyjson.com/users')
        if(!res.ok){
            console.log("faild");
        }else{
            const data = await res.json();
            return data;
        }
    } catch (error) {
        console.log("Error "+error);
    }
}
const processUserData = async ()=>{
    const data = await fetchUsersData();
    const usersArr = data.users;
    const maleUsers =()=>{
        return usersArr.filter(({gender})=>gender!=='male');
    }
    const mapUsers =()=>{
        return maleUsers().map(({firstName,lastName,age})=>`Name : ${firstName} ${lastName} , Age : ${age}`);
    } 
    console.log(mapUsers());
}
const summarizeAge = async () =>{
    const usersData = await fetchUsersData();
    const usersArr = usersData.users;
    const SumAge = usersArr.reduce((sum,user)=>{
            if (user.gender === 'male') {
                return sum + user.age
            }else{
                return sum;
            }
        },0)
    console.log('Total Age of Active Users: '+SumAge);
}
summarizeAge();
processUserData();
fetchUsersData();

