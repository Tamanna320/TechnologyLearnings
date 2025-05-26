import react from 'react';
import './InputBox.css';

interface InputBoxProps {
    label: string;
    placeholder: string;
    helperText: string;
    hasError: Boolean;
    addon?: React.ReactNode;
}

const InputBox:React.FC<InputBoxProps>=({ label, placeholder, helperText, hasError, addon }) => {
    return(
        
        <div className={`input-Box ${hasError ? 'error' : ''}`}>
            <label className="">{label}</label>
            <div className="input-field">
                <input type="text" placeholder={placeholder} />
                {addon && <span className="addon">{addon}</span>}

            </div>
      <div className="helper-text">{helperText}</div>

    </div>
    )
}