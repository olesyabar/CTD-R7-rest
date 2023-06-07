function handle_ajax(event) {
  console.log('DOM fully loaded and parsed');
  const authHeader = localStorage.getItem("authHeader");
  const resultsDiv = document.getElementById('results-div');
  const restOpsDiv = document.getElementById('rest-ops');
  const listMembersButton = document.getElementById('list-members');
  const createMemberButton = document.getElementById('create-member');
  const firstName = document.getElementById('member-firstName');
  const lastName = document.getElementById('member-lastName');
  const updateMemberButton = document.getElementById('update-member');
  const memberID = document.getElementById('member-id');
  const firstName1 = document.getElementById('member-firstName1');
  const lastName1 = document.getElementById('member-lastName1');
  const members_path = 'http://localhost:3000/api/v1/members';
  const memberID1 = document.getElementById('member-id1');
  const deleteMemberButton = document.getElementById('delete-member');
  const memberID2 = document.getElementById('member-id2');
  const listFactsButton = document.getElementById('list-facts');
  const memberID3 = document.getElementById('member-id3');
  const fact = document.getElementById('fact');
  const likes = document.getElementById('likes');
  const createFact = document.getElementById('create-fact');
  const memberID4 = document.getElementById('member-id4');
  const factID = document.getElementById('fact-id');
  const fact1 = document.getElementById('fact1');
  const likes1 = document.getElementById('likes1');
  const updateFact = document.getElementById('update-fact');
  const memberID5 = document.getElementById('member-id5');
  const factID1 = document.getElementById('fact-id1');
  const deleteFact = document.getElementById('delete-fact');

  restOpsDiv.addEventListener('click', (event) => {
    if (event.target === listMembersButton) {
      fetch(members_path,
          {  headers: { 'Content-Type': 'application/json',
          'authorization': authHeader } }
        ).then((response) => {
        if (response.status === 200) {
          resultsDiv.innerHTML = '';
          response.json().then((data) => {
            for (let i=0; i<data.length; i++) {
              let parag = document.createElement('P');
              parag.textContent = JSON.stringify(data[i]);
              resultsDiv.appendChild(parag);
            }
          });
        } else {
          alert(`Return code ${response.status} ${response.statusText}`);
        }
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
    } else if (event.target === createMemberButton) {
      var dataObject = {
        first_name: firstName.value,
        last_name: lastName.value
      }
      fetch(members_path,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateMemberButton) {
      var dataObject = {
        first_name: firstName1.value,
        last_name: lastName1.value
      }
      fetch(`${members_path}/${memberID.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteMemberButton) {
      fetch(`${members_path}/${memberID1.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === listFactsButton) {
      fetch(`${members_path}/${memberID2.value}/facts`,
        { method: 'GET',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === createFact) {
      var dataObject = {
        fact_text: fact.value,
        likes: likes.value
      }
      fetch(`${members_path}/${memberID3.value}/facts`,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateFact) {
      var dataObject = {
        fact_text: fact1.value,
        likes: likes1.value
      }
      fetch(`${members_path}/${memberID4.value}/facts/${factID.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteFact) {
      fetch(`${members_path}/${memberID5.value}/facts/${factID1.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json',
            'authorization': authHeader }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    }
  });
}
document.addEventListener('DOMContentLoaded', handle_ajax(event));
