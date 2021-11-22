let modalWrap = null
const createModal = (modalType, content) => {
  if (modalWrap !== null) {
    modalWrap.remove()
  }
  if (modalType == 'Success') {
    modalWrap = document.createElement('div')
    modalWrap.innerHTML = `
    <div class="modal fade" id="succesModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="">
            <span>×</span>
          </button>
        </div>
  
        <div class="modal-body">
          <div class="correct">
            <img
              src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"
              alt=""
            />
            <h1>Correct</h1>
            <p id="messageSection">${content}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  }
  if (modalType == 'Alert') {
    modalWrap = document.createElement('div')
    modalWrap.innerHTML = `
    <div class="modal fade" id="alertModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="">
          <span>×</span>
        </button>
      </div>

      <div class="modal-body">
        <div class="thank-you-pop">
          <img
            src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"
            alt=""
          />
          <h1>Incorrect</h1>
          <p id="messageSection"></p>
        </div>
      </div>
    </div>
  </div>
</div>`
  }
  document.body.append(modalWrap)
  var modal = new bootstrap.Modal(modal.querySelector('modal'))
}
