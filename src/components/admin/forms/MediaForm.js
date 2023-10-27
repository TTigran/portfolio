import React, {useState} from 'react';


function MediaForm() {
    const [title, setTitle] = useState("");
    const handleTitleChange = (e) => setTitle(e.target.value);

    return (
        <form>
            <div>
                <label htmlFor="title">Video:</label>
                <input
                    type="file"
                    id="video"
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

export default MediaForm;