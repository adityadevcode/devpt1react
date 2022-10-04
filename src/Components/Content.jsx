import { FaTrashAlt } from 'react-icons/fa';
import ItemList from './ItemList';

const Content = ({items,handleCheck, handleDelete}) => {
//  we destructured props
  return(
  <main>
  <h3>Content component</h3>
        {items.length ? (
          <ItemList
        items ={items}
        handleCheck ={handleCheck}
        handleDelete ={handleDelete}
        />
        ):(
         // if list is empty then below
         <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )
      }
 </main>
 )
        }

        export default Content;