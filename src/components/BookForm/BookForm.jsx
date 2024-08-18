import css from "./BookForm.module.css"


const BookForm = ()=>{
	return (
		<div>
			<h3>Book your campervan now</h3>
			<p>Stay connected! We are always ready to help you.</p>
			<form className={css.form}>
				<input type="name" />
				<input type="email" />
				<input type="date" />
			</form>
		</div>
	)
}

export default BookForm;