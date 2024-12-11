import './style.scss';

import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { readApiAccount } from '../../api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {   
        e.preventDefault();
        fetch(readApiAccount)
        .then(response => response.json())
        .then(accounts => {
            const account = accounts.find(acc => acc.email_client === username);
            alert(account.email_client);
            if (account && account.password_client === password) {
                localStorage.setItem('userData', JSON.stringify(account.id_client));
                navigate('/');
                window.location.reload();
              } else if (account.password != password) {
                setErrorMessage('Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
            } else if (account.permission != 'USER'){
                alert('Quyền hạn không không được phép đăng nhập');
            }
        })
        .catch(error => console.error('Error fetching accounts:', error));
    };
  
    return <>
        <div class="container-login">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleLogin}>
                <a href="" class="btn btn-facebook">Facebook</a>
                <a href="#" class="btn btn-google">Google</a>
            
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="username" name="username" required placeholder="Username"  value={username}
                onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div class="form-group">
                    <label for="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" required placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input class="btn-submit" value="Đăng nhập" type="submit" name="login"/>
                <p style={{marginTop: '10px'}}>Bạn chưa có tài khoản, vui lòng đăng ký <a href="/dang-ky">tại đây</a></p>
                    {errorMessage && <p className="error-message">{errorMessage}</p> }
            </form>
        </div>
    </>
}

export default Login;