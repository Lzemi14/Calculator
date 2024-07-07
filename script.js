let currDis = "";
document.querySelector('#display').value = currDis;
function add(x) {
  currDis=currDis+x;
  document.querySelector('#display').value = currDis;
}
function result()
{
  try {
    let x = currDis.replace(/÷/g, '/').replace(/x/g, '*');
    let res = eval(x);
    currDis=currDis.replace(currDis,res);
    if (res === undefined || isNaN(res)) {
      document.querySelector('#display').value = 'Error';
    } else {
      document.querySelector('#display').value = res;
    }
  } catch (e) {
    document.querySelector('#display').value = 'Error';
  }
}
function remove()
{
 currDis = currDis.slice(0,-1);
 document.querySelector('#display').value = currDis;
}
function cleardisplay()
{
  
    currDis = '';
    document.querySelector('#display').value = currDis;

  
}