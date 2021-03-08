
function NewTodo({ onChange, value, onAddNew}){
  return (
      <div className="flex w-screen items-center border bg-white">
          <form class="flex items-center mx-auto p-5">
          <input type="text" type="text" id="txtTodo" name="txtTodo" placeholder="Ingresar" 
            onChange={onChange} value={value} caption="Nuevo item:"
            required
            className="p-2 border-2 border-black w-52 sm:w-96"
          ></input>
          <button onClick={onAddNew}
          className="mx-3 bg-white-500 border hover:bg-white hover:border-indigo-500">
          <svg class="h-8 w-8 text-indigo-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <line x1="9" y1="14" x2="15" y2="14" /></svg>
          </button>
          </form>
      </div>
  );
}
export default NewTodo;
