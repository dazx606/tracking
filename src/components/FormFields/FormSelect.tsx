
import styles from './FormFields.module.css';


interface Props {
    label: string,
    placeHolder: string,
    value: string | undefined,
    setFormValue: (text: string) => void,
    errorText?: string,
    options: { value: string, optionName: string }[],
    width?: string | number
    noLabel?: boolean,
}

export const FormSelect = ({ label, placeHolder, errorText, setFormValue, options, value, width, noLabel }: Props): JSX.Element => {


    return (
        <div className={styles.inputGroup} style={width ? { width } : {}}>
            {noLabel ?
                null :
                <label>{label}
                </label>}
            <select id="opciones" name="opciones" value={value}
                style={(value === placeHolder || !value) ? { color: 'gray' } : {}}
                className={`${styles.inputSelect} ${errorText ? styles.inputError : ''}`}
                onChange={(e) => { e.target.value && setFormValue(e.target.value) }}>
                <option value={placeHolder} >{placeHolder}</option>
                {
                    options.map((e, i) => <option key={i} value={e.value}>{e.optionName}</option>
                    )
                }

            </select>
            <p className={styles.errorText}>{errorText ? errorText : ''}</p>
        </div>
    )
}
