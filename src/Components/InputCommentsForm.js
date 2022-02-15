import RenderCommentsForm from "./RenderCommentsForm";

function CommentsForm() {

  return(
    <>
    <form>
      <div>
        <textarea id="inputComments" rows="5" cols="50"/>
        <button>Tweet</button>
      </div>
    </form>
    <RenderCommentsForm />
    </>
  )
}

export default CommentsForm;