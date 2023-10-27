import React, {useState} from 'react';


function HomeImageForm() {
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => setTitle(e.target.value);

    return (
        <form>
            <div>
                <label htmlFor="title">Home Image:</label>
                <input
                    type="file"
                    id="home-image"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>

            <div>
                <button className="submit-button">Submit</button>
            </div>
        </form>
    )
}

export default HomeImageForm;