console.log('Index of Cv Screener');

const data =[
    {
        name : 'Jam Benten',
        age : 24,
        city : 'Kolkata',
        language : 'Python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name : 'Ajay Devgan',
        age : 30,
        city : 'Banglore',
        language : 'Javascript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/52.jpg'
    },

    {
        name : 'Shilpa Sharma',
        age : 22,
        city : 'Mumbai',
        language : 'Java',
        framework : 'Spring',
        image : 'https://randomuser.me/api/portraits/women/77.jpg'
    },

    {
        name : 'Jonita Mantri',
        age : 35,
        city : 'Delhi',
        language : 'PHP',
        framework : 'Larvel',
        image : 'https://randomuser.me/api/portraits/women/25.jpg'
    },

]

//CV Iterators

function cvIterator(profiles){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length ?
            {value : profiles[nextIndex++], done : false} :
            {done : true}
         }
    };
}
const candidates = cvIterator(data);
nextCV();

//ButtonListener for next Button

const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value; 
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){

    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item disabled" aria-disabled="true">Name : ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old.</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Work on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  </ul>`;
    
    }
    else{
        alert('End of Applications');
        window.location.reload();
    }
}



