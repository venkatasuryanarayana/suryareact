import React from 'react';

//try to give component name and file name same to avoid confusion
function Head(props){
	return (
		//here div tag is complusary
		<div>
        <h1> This is head part data {props.name} </h1>
        {props.children};

        </div>
		);
}


export default Head;
//same name given in function name non other than compoinent name(Head).