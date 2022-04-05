import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.getResult(formData);
        setFormData('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="rounded-md border-black border-4 border-solid p-4">
                <label for="entry">Enter any term you want to look up: </label>
                <input type="text" id="entry" placeholder="Enter a term..." onChange={handleChange} value={formData} className="border-4 border-solid border-black rounded mr-1 p-1" />
                <input type="submit" value="Submit" className="bg-blue-400 text-white p-2 rounded-md" />
            </form>
        </div>
    );
}

export default Form;