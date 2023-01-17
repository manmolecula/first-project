let password = '123456789';

if(password.length >=4 && (password.includes('-') || password.includes('_'))){
    console.log('Пароль надежный');
} else console.log('Пароль недостаточно надежный');