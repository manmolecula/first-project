function checkEmails(emails, blacklist){
    for(let mail of emails){
        if(!blacklist.includes(mail)) goodMails.push(mail);
    }
    return goodMails;
}

let emails = ['qwerty@mail.ru', 'asd12@bk.ru', 'kuchevanton@bk.ru', 'zxc12@yandex.ru'];
let blacklist = ['zxc@yandex.ru', 'qwerty@mail.ru'];
let goodMails = [];

console.log(checkEmails(emails, blacklist));
