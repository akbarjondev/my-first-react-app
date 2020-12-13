import { useState } from 'react'

const name = 'Akbarjon';


function Login() {

	const [x, setX] = useState(0);
	
	return (
		<>
			<div className="container">
				<h1>Assalomu alaykum {name}</h1>
				<p>Login formani to'ldiring</p>

				<div className="form">
					<label className="form__label" htmlFor="input-username">Username</label>
					<input className="form__input" type="text" id="input-username" />

					<label className="form__label" htmlFor="input-password">Password</label>
					<input className="form__input" onChange={e => setX(e.target.value)} type="password" id="input-password" />

					<input className="form__submit" type="submit" value="Submit" />
					<br />
					<p className="form__text">{x.length > 6 ? `;)` : `Belgilar soni 5tadan ortiq bo'lishi kerak`}</p>
				</div>
			</div>
		</>
	)
}

export default Login