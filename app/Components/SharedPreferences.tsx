import SharedPreferences from 'react-native-shared-preferences';
import {
  View,
  ToastAndroid,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
} from 'react-native';
import {useState, useRef, useEffect} from 'react';
const useSharedPreferences = (key: string, setter: Function) => {
  useEffect(() => {
    SharedPreferences.getItem(key, value => {
      if (value) {
        setter(value);
      }
    });
  }, [key, setter]);
};
export default function () {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const accountRef = useRef(null);
  const passwordRef = useRef(null);

  useSharedPreferences('Account', setAccount);
  useSharedPreferences('Password', setPassword);

  const login = () => {
    if (remember) {
      SharedPreferences.setItem('Account', accountRef.current?.value);
      SharedPreferences.setItem('Password', passwordRef.current?.value);
    } else {
      SharedPreferences.clear();
    }
    ToastAndroid.show('login success', ToastAndroid.SHORT);
  };

  const radioChange = () => {
    setRemember(!remember);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: 'blue',
        }}>
        <Text style={{fontSize: 30, margin: 10, color: '#f3f3f3'}}>
          SharedPreferences
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontSize: 30}}>Account:</Text>
        <TextInput
          ref={accountRef}
          defaultValue={account}
          onChangeText={e => (accountRef.current.value = e)}
          style={{flex: 1}}
          underlineColorAndroid={'grey'}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontSize: 30}}>Password:</Text>
        <TextInput
          ref={passwordRef}
          defaultValue={password}
          onChangeText={e => (passwordRef.current.value = e)}
          style={{flex: 1}}
          underlineColorAndroid={'grey'}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={radioChange}>
          <RadioButton selected={remember} />
        </TouchableOpacity>
        <Text style={{color: 'grey', fontSize: 30}}>remember password</Text>
      </View>
      <Button title="click" onPress={login}></Button>
    </View>
  );
}
function RadioButton({selected}: {selected: boolean}) {
  return (
    <View
      style={{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      }}>
      {selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#000',
          }}
        />
      ) : null}
    </View>
  );
}
