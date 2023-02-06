export const SignUpData = [
  {
    id: 'name',
    name: 'userName',
    title: 'Name',
    placeholder: '이름',
    type: 'text',
    message: { name: '2자 이상 입력하세요.' },
  },
  {
    id: 'email',
    name: 'userEmail',
    title: 'Email',
    placeholder: '이메일',
    type: 'text',
    message: { email: '이메일 형식을 지켜주세요.' },
  },
  {
    id: 'password',
    name: 'userPassword',
    title: 'Password',
    placeholder: '비밀번호',
    type: 'password',
    message: { password: '대소문자, 특수문자, 숫자 1자이상 포함해야됩니다.' },
  },
  {
    id: 'passwordConfirm',
    name: 'userPasswordConfirm',
    title: 'Confirm Password',
    placeholder: '비밀번호 확인',
    type: 'password',
    message: { confirm: '비밀번호와 일치하지 않습니다.' },
  },
];
