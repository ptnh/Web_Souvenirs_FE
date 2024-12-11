
import './style.scss';

import { useEffect, useState } from "react";
import { createApiAccount } from '../../api';

const Register = ({DataUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [thongbao, setThongbao] = useState('');

    const handleRegister = () => {
        // e.preventDefault();
        const registerAccount = new FormData();
        registerAccount.append('username_client', username);
        registerAccount.append('password_client', password);
        registerAccount.append('email_client', email);
        registerAccount.append('phone_client', phone);
        registerAccount.append('permission', 'USER');
        fetch(createApiAccount, {
          method: 'POST',
          body: registerAccount,
        })
            .then((response) => {
                if (response.ok) {
                  setThongbao('Đăng ký tài khoản thành công!');
                } else {
                  setThongbao('Đăng ký tài khoản không thành công! Vui lòng đăng ký lại');
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    return <>
        <div class="container-register">
            <h2>Đăng ký tài khoản</h2>
            <div>
                <a href="#" class="btn btn-facebook">Facebook</a>
                <a href="#" class="btn btn-google">Google</a>
                <div class="form-group">
                    <input type="text" id="username" name="username" required placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" required placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <input type="email" id="email" name="email" required placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <input type="phone" id="phone" name="phone" required placeholder="Số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
              
                <input className="btn-submit"
                    value="Đăng ký"
                    type="submit"
                    name="register"
                    onClick={handleRegister}
                />
            </div>
            <h2 className="thongbao" style={{ fontWeight: 'none', fontSize: '15px', marginTop: '10px', color: 'black' }}>
                {thongbao && (
                <>
                    {thongbao}
                    <span>
                        <a href="/dang-nhap" style={{ color: 'black' }} onMouseOver={(e) => (e.target.style.color = 'orange')} onMouseOut={(e) => (e.target.style.color = 'black')}>
                            Đăng nhập tại đây!
                        </a>
                    </span>
                </>
              )}
            </h2>
        </div>
    </>
}

export default Register;