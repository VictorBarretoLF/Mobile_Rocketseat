import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal from '../../stilos';

export default function TelaPadrao({ children }) {
  return <SafeAreaView style={estilosGlobal.preencher}>
  <StatusBar />
  <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={estilosGlobal.preencher}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
}