function previewFiles(input) {
    const preview = document.getElementById('preview')
    const {
      files
    } = input
    Array.from(files).forEach(file => {
      const reader = new FileReader()
      reader.onload = e => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const button = document.createElement('button')   
        img.src = e.target.result
        img.width = 150
        img.height = 150
        button.textContent = 'Delete'
        button.addEventListener('click', () => {
          preview.removeChild(div)
        })
        div.appendChild(img)
        div.appendChild(button)
        preview.appendChild(div)
      }
      reader.readAsDataURL(file)
    })
  }   
 let inpFile = document.querySelector('[name="file"]');
 let div = document.querySelector('.area');
 div.addEventListener("click",function() {
     this.children[1].click();
 })