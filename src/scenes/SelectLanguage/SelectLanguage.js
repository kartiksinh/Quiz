import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useHistory } from 'react-router-dom';
const { Option } = Select;


const getUserDetails = () => {
  let user= localStorage.getItem('user');
  if(user){
    return JSON.parse(localStorage.getItem('user'))
  } else{
    return [];
  }
}

function SelectLanguage() {
  const history = useHistory();

  const[user, setUser] = useState(getUserDetails());

    function onChange(value) {
      history.push(`/${value}`);
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    useEffect(() => {
      console.log("select languauge");
      getUserDetails();
    }, [])


    return (
        <div style={{width: 900, margin: '0 auto', marginTop: 150}}>
          <h3 style={{color: "#20366b"}}> Hi {user.username}....Please select a language for the Quiz</h3>
            <Select
                showSearch
                style={{ width: 200, marginTop: 20}}
                placeholder="Select a Language"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="html">HTML</Option>
                <Option value="css">CSS</Option>
                <Option value="javascript">JavaScript</Option>
            </Select>
        </div>
    );
}

export default SelectLanguage;
