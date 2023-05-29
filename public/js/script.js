function addProject(e) {
    try {

        e.preventDefault();

        const parentProjectDiv = document.getElementById('all-projects');
        const projectElem = document.getElementById('project');

        const newProjectElem = projectElem.cloneNode('deep');

        const totalProjectCount = parentProjectDiv.children.length;

        newProjectElem.children[0].children[0].innerHTML = `Project ${totalProjectCount+1}`

        newProjectElem.children[1].children[1].value = null;
        newProjectElem.children[2].children[1].value = null;

        parentProjectDiv.appendChild(newProjectElem);

        // console.log(parentProjectDiv);
    } catch (error) {
        console.log(error);
        alert('Error adding project: ' + error.message)
    }
}


function addSkill(e) {
    try {
        e.preventDefault();

        const skillParentElem = document.getElementById('all-skills');

        // console.log(skillParentElem);

        const skillElem = document.getElementById('skill-input');

        const newSkillElem = skillElem.cloneNode('deep');

        newSkillElem.children[0].value = '';

        skillParentElem.appendChild(newSkillElem);

    } catch (error) {
        console.log(error);
        alert('Error adding skill: ' + error.message)
    }
}


function addExperience(e) {
    try {
        e.preventDefault();
        // console.log(e.target);

        const expElem = document.getElementById('experience');
        const parentExpElem = document.getElementById('all-experiences');

        const newExpElem = expElem.cloneNode('deep');

        const totalExpCount = parentExpElem.children.length;

        newExpElem.children[0].children[0].innerHTML = `Experience ${totalExpCount+1}`;

        newExpElem.children[1].children[0].value = null;

        parentExpElem.appendChild(newExpElem);

    } catch (error) {
        console.log(error);
        alert(error.message)
    }
}

function handleFormSubmit(e) {
    try {
        e.preventDefault();
        console.log(e.target);
    } catch (error) {

    }
}