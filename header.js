import React from 'react';

//try to give component name and file name same to avoid confusion
function Header(){
	return (
		//here div tag is complusary
		<div>
        <h1> This is header part given by me</h1>
        <Welcome />
        </div>
		);
}

let Welcome = () =>{
	return <p>This is welcome page</p>;
};

export default Header;
//same name given in function name non other than compoinent name(Header).