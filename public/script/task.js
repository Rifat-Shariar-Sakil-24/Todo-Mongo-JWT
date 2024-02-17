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




      //edit
       // Add event listener to delete buttons
       const editButtons = document.querySelectorAll('.edit-button');
       editButtons.forEach(button => {
         button.addEventListener('click', function() {

           const taskToEditWithId = this.value;
     
           const both = taskToEditWithId.split(' ');
           const taskID = both[0];
           let taskToEdit = both[1];
           console.log(taskToEditWithId)
           // Show confirmation modal
           const modalEdit = document.getElementById('confirmationEditModal');
           modalEdit.style.display = 'block';

           const textArea = document.getElementById('taskTextarea');
           console.log(textArea);
           textArea.value = taskToEdit;
           console.log(textArea.value);
 
           // Add event listener to confirm delete button in modal
           const confirmEditButton = document.getElementById('confirmEditButton');
           confirmEditButton.addEventListener('click', async function() {
             const nowTextArea = document.getElementById('taskTextarea');
             taskToEdit = nowTextArea.value;
             console.log(taskToEdit);
             modalEdit.style.display = 'none';
 
 
             try {
              
               const res = await fetch('/task', {
                 method: 'PUT',
                 body: JSON.stringify({taskToEdit,taskID}),
                 headers: { 'Content-Type': 'application/json'}
                 
               });
              
               if (res.status == 201) {
                const errorMessage = await res.text(); 
                location.assign('/task');
                  const successSound = document.getElementById('successSound');
                 successSound.play();
                 
               } else {
                 const errorMessage = await res.text(); 
                 alert(errorMessage);
               }
               
             } catch(error) {
               console.log(error);
             }
           
             console.log('Task Edited');
             // Close modal after delete
             modalEdit.style.display = 'none';
           });
 
           // Add event listener to cancel delete button in modal
           const cancelEditButton = document.getElementById('cancelEditButton');
           cancelEditButton.addEventListener('click', function() {
             // Close modal without delete action
             modalEdit.style.display = 'none';
           });
         });
       });