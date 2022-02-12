let modalText = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle"></h5>
      </div>
      <div class="modal-body" id="modalBody"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`;
function initModal(){
    document.getElementById("modal").innerHTML = modalText;
  }

function updateModal(data){
  var modal = new bootstrap.Modal(document.getElementById('modal'));
  if(data){
    document.getElementById("modalTitle").innerHTML = data[0];
    document.getElementById("modalBody").innerHTML = `
      <p>
        <strong>Department: </strong>${ data[1]} <br>
        <strong>Position: </strong>${ data[2]} <hr>
        <strong>Salary: </strong>$${ data[3]}<br>
        <strong>Retro: </strong>$${ data[4]}<br>
        <strong>Expense/Other: </strong>$${ data[5]}<br>
        <strong>Overtime: </strong>$${ data[6]}<br>
        <strong>Injured: </strong>$${ data[7]}<br>
        <strong>Details: </strong>$${ data[8]}<br>
        <strong>Quinn: </strong>$${ data[9]}<br>
        <strong>Gross: </strong>$${ data[10]}
      </p>
    `;
    modal.show();
  }
}

export { initModal, updateModal }