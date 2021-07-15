let modalTemplate = `<div id="${'modal'+modalId}">
<div class="modal fade" id="addTrackModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Track</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
          <form></form>
              <div class="form-group">
                <label for="addTrackInput">Track Number</label>
                <input type="text" class="form-control" id="addTrackInput" placeholder="Example input placeholder">
              </div>
              <div class="form-group">
                <label for="addTrackInput1">Title</label>
                <input type="text" class="form-control" id="addTrackInput1" placeholder="Example input placeholder">
              </div>
              <div class="form-group">
                <label for="addTrackInput2">Duration</label>
                <input type="text" class="form-control" id="addTrackInput2" placeholder="Another input placeholder">
              </div>
              <div class="form-group">
                <label for="addTrackInput3">Featuring</label>
                <input type="text" class="form-control" id="addTrackInput3" placeholder="Another input placeholder">
              </div>
            
            <label>Live Track</label>
            <input type="checkbox" aria-label="Checkbox for following text input">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Add Track</button>
      </div>
    </div>
  </div>
</div>
</div>`
const createNewModal = function() {

}

const deleteTrack = function(event){
    let td = event.target.parentNode; 
      let tr = td.parentNode;
      tr.parentNode.removeChild(tr);
}

const createNewTrack = function(event){
    let newTr = document.createElement('tr')
    let newDeleteButton = document.createElement()
    newDeleteButton.innerText = "Delete"
    let newTrackNumber = document.createElement('td')
    newTrackNumber.innerText = document.getElementById('addTrackInput').value
    newTr.appendChild(newTrackNumber)    
    let newTrackTitle = document.createElement('td')
    newTrackTitle.innerText = document.getElementById('addTrackInput1').value
    newTr.appendChild(newTrackTitle) 
    let newTrackDuration = document.createElement('td')
    newTrackDuration.innerText = document.getElementById('addTrackInput2').value
    newTr.appendChild(newTrackDuration) 
    let newTrackFeaturing = document.createElement('td')
    newTrackFeaturing.innerText = document.getElementById('addTrackInput3').value
    newTr.appendChild(newTrackFeaturing)

}