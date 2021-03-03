import { useCallback, useState } from "react";
import useAddCard from "./hooks/addCard";
import { addPosts } from "../actions";

function AddCard({ name }) {
  const [expandAddForm, setExpandAddForm] = useState(false);
  const { inputs, handleSubmit, handleInputChange } = useAddCard(addPosts, setExpandAddForm);

  const expandForm = useCallback(() => {
    setExpandAddForm(true);
  }, [])

  if (!expandAddForm) {
    return (<button onClick={expandForm}>{`Add ${name.toLowerCase()}`} </button>)
  }
  return (<div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input type="text" name="id" required value={inputs.id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Title</label>
        <input type="text" name="title" required value={inputs.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Body</label>
        <input type="text" name="body" required value={inputs.body} onChange={handleInputChange} />
      </div>
      <button type="submit">{`add ${name.toLowerCase()}`} </button>
    </form>
  </div>)
}
export default AddCard;