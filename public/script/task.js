const form = document.querySelector('form');
      form.addEventListener('submit', async function(e){
        e.preventDefault();
        const taskName = form.taskName.value;

        try {
          const res = await fetch('/task', {
            method: 'POST',
            body: JSON.stringify({taskName}),
            headers: { 'Content-Type': 'application/json'}
          });
          
          if (res.status == 201) {
            console.log('task added');
            
            location.assign('/task');
            const successSound = document.getElementById('successSound');
            successSound.play();
          } else {
            const errorMessage = await res.text(); 
            alert(errorMessage);
          }
        } catch(error) {
          console.log("error occurred");
        }
      });

      // Add event listener to delete buttons
      const deleteButtons = document.querySelectorAll('.delete-button');
      deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
          const taskToDelete = this.value;
          // Show confirmation modal
          const modal = document.getElementById('confirmationModal');
          modal.style.display = 'block';

          // Add event listener to confirm delete button in modal
          const confirmDeleteButton = document.getElementById('confirmDeleteButton');
          confirmDeleteButton.addEventListener('click', async function() {
            modal.style.display = 'none';


            try {
             
              const res = await fetch('/task', {
                method: 'DELETE',
                body: JSON.stringify({taskToDelete}),
                headers: { 'Content-Type': 'application/json'}
                
              });
             
              if (res.status == 201) {
                const errorMessage = await res.text(); 
               
                location.assign('/task');
                const successSound = document.getElementById('deleteSound');
                successSound.play();
                
              } else {
                const errorMessage = await res.text(); 
                alert(errorMessage);
              }
              
            } catch(error) {
              console.log(error);
            }
            // Perform delete action
            // You can add your delete logic here
            //console.log('Task deleted');
            // Close modal after delete
            modal.style.display = 'none';
          });

          // Add event listener to cancel delete button in modal
          const cancelDeleteButton = document.getElementById('cancelDeleteButton');
          cancelDeleteButton.addEventListener('click', function() {
            // Close modal without delete action
            modal.style.display = 'none';
          });
        });
      });