// function parseEmployeesData(dataString){
//     return dataString

//     .split('\n')

//     .filter(line => line.trim().length > 0)

//     .map(line => {
//         const [fullName, occupation] = line

//             .split(',')

//             .map(str => str.trim())

//             .filter(text => text.length > 0);
//         const [surname, name, middleName] = fullName
        
//         .split(' ')

//         .filter(text => text.length > 0);
    
//     return{
//         surname, name, middleName, occupation
//     };
//     })
// }
// console.log(parseEmployeesData(`
// Кучев Антон  Алексеевич, frontend-разработчик
// Соколова Мария Степановна , девушка frontend-разработчика
// `));
// let array
// function getPageLinkDomains() {
//     return Array.from(document.getElementsByTagName('a'))

//         .map(link => link.href

//             .replace('http://', '')
//             .replace('https://', '')
//             .replace('www.', '')

//             .split('/')
//             .shift()
//         )
//         .reduce((uniqueDomains, domain) => {
//             if (uniqueDomains.includes(domain)) return uniqueDomains;
//             return [...uniqueDomains, domain];
//         }, []);
// }

// console.log(getPageLinkDomains());


(function() {
    function appendStudent() {
        let tr = document.createElement('tr');
        tr.classList.add('.tr');
        tableBody.append(tr);
            let fio = document.createElement('th');
            fio.classList.add('fio');
            let faq = document.createElement('th');
            faq.classList.add('faq');
            let date = document.createElement('th');
            date.classList.add('date');
            let kurs = document.createElement('th');
            kurs.classList.add('kurs');
            fio.textContent = studentMas[0].fio;
            faq.textContent = studentMas[0].faq;
            let dateOfBirth = studentMas[0].date.split('-').shift();
            let monthOfBirth = studentMas[0].date.split('-')[1];
            let dayOfBirth = studentMas[0].date.split('-')[2];
            if(todayMonth-monthOfBirth+1<0) date.textContent = `${studentMas[0].date} ${today - dateOfBirth - 1} лет`
            else date.textContent = `${studentMas[0].date} ${today - dateOfBirth} лет`;
            if(todayMonth-monthOfBirth+1==0 && todayDay-dayOfBirth<0) date.textContent = `${studentMas[0].date} ${today - dateOfBirth - 1} лет`;
            kurs.textContent = `${studentMas[0].admission}-${parseInt(studentMas[0].admission) + 4} ${today - parseInt(studentMas[0].admission)} курс`;
            if(today - parseInt(studentMas[0].admission) > 4) kurs.textContent = `${studentMas[0].admission}-${parseInt(studentMas[0].admission) + 4} закончил(а) обучение`;
            tr.append(fio);
            tr.append(faq);
            tr.append(date);
            tr.append(kurs);
    }
    let studentMas = [];
    let studentMasGen = [];
    let today = new Date().getFullYear();
    let todayMonth = new Date().getMonth();
    let todayDay = new Date().getDate();
    const filter_fio = document.getElementById('search-fio');
    const tableBody = document.getElementById('table-body');
    const newStudent = document.getElementById('new-student');
    const form1 = document.getElementById('form1');
    const sbmtForm1 = document.getElementById('submit-form1');
    const fio = document.getElementById('surname');
    const faq = document.getElementById('faq');
    const age = document.getElementById('age');
    const adm = document.getElementById('admission');
    newStudent.addEventListener('click', ()=>{
        form1.classList.toggle('invisible');
    })
    sbmtForm1.addEventListener('click', (e) => {
        e.preventDefault();
        if(fio.value=='' || faq.value =='' || age.value =='' || adm.value=='') return alert('Заполните пустые поля!');
        studentMas.push({fio:fio.value,faq:faq.value,date:age.value,admission:adm.value});
        fio.value='';
        faq.value='';
        age.value='';
        adm.value='';
        console.log(studentMas);
        appendStudent();
        studentMasGen.push(studentMas[0]);
        studentMas = [];
    })
    
    filter_fio.addEventListener('input', ()=>{
        tableBody.innerHTML = '';
        for(let i=0;i<studentMasGen.length;i++){
            if(String(studentMasGen[i].fio).trim() == String(filter_fio.value)){
                studentMas[0] = studentMasGen[i];
                appendStudent();
                studentMas = [];
            }
        }
        console.log(filter_fio.value);
        if(filter_fio.value == ''){
            for(let i=0;i<studentMasGen.length;i++){
                studentMas.push(studentMasGen[i]);
                appendStudent();
                studentMas = [];
            }
        }
    })
})();
