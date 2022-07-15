import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import {Theme} from '../../components/Theme';
import { ChangeEvent, useEffect, useState } from 'react';


const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [firstName, setFirstName] = useState('');
    useEffect(() => {
        if(state.name === ''){
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
            const splited = state.name.split(" ");
            setFirstName(splited[0]);
        }
    }, []);
    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            alert("Nome: "+state.name+"   Nivel: "+state.level+"   Email: "+state.email+"   GitHub: "+state.github);
        } else {
            alert("Preencha os dados");
        }
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {firstName}, onde te achamos?</h1>
                <p>Preencha com seus contatos</p>
                <hr/>
                <label htmlFor='email'>
                    Qual seu e-mail?
                </label>
                    <input
                        id="email"
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                <label htmlFor='github'>
                    Qual seu GitHub?
                </label>
                    <input
                        id="github"
                        type="url"
                        value={state.github}
                        onChange={handleGitHubChange}
                    />
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    );
}

export default FormStep3;