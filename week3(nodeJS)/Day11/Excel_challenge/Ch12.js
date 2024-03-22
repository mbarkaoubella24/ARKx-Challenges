const xlsx = require('xlsx');

const processEmployee= async (Filepath)=> {

    try {
        if (Filepath.split('.')[1]==="xlsx") {
            const woorkBk = await xlsx.readFile(Filepath);
            const woork_sheet = woorkBk.SheetNames[0];
            const sheet = woorkBk.Sheets[woork_sheet];
            const data = xlsx.utils.sheet_to_json(sheet);
            const newData = calc_bonus_employee(data);
            updateFile(newData);
        }
        else{
            console.log("the extension is not .xlsx , please give a valid file !");
        }
    } 
    catch (error) {
        console.log("Error Happen : "+error);
    }
}
const calc_bonus_employee = (obj)=>{
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].AnnualSalary<50000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.05;
            obj[i].bonusPercentage = "%5";
        }else if (obj[i].AnnualSalary >= 50000 || obj[i].AnnualSalary <= 100000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.07;
            obj[i].bonusPercentage = "7%";
        }else if (obj[i].AnnualSalary>100000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.1;
            obj[i].bonusPercentage = "10%";
        } else {
            obj[i].bonusAmount = 0;
            obj[i].bonusPercentage = "0%";
        }
    }  
    return obj;
}
const updateFile = async (newData) =>{
    const new_workbook = await xlsx.utils.book_new();
    const new_worksheet = xlsx.utils.json_to_sheet(newData);
    xlsx.utils.book_append_sheet(new_workbook, new_worksheet, "new_data");
    xlsx.writeFile(new_workbook, "new_employee_data.xlsx");
}
processEmployee("employeeData.xlsx");