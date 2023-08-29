import './App.css';
import { BiSolidLayer } from 'react-icons/bi';
import { RiAttachment2 } from 'react-icons/ri';
import { FaClipboardList, FaRegComments } from 'react-icons/fa';
import { AiFillCalendar } from 'react-icons/ai';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {
	const [isModalOpen, setModal] = useState(false);
	const [files, setFiles] = useState([]);
	const titles = [
		{ name: 'Incomplete', color: '#d21010' },
		{ name: 'To Do', color: '#00B5FF' },
		{ name: 'Doing', color: '#E8C342' },
		{ name: 'Under Review', color: '' },
		{ name: 'Completed', color: '' },
		{ name: 'Overdue', color: '' },
	];
	const handleModal = () => {
		setModal((val) => !val);
	};
	console.log('files=', files);

	return (
		<div className="todo-container">
			<div>
				{isModalOpen && (
					<Modal handleModal={handleModal} files={files} setFiles={setFiles} />
				)}
			</div>
			{titles.map((item, index) => (
				<div key={index} className="todo">
					<div className="todo-header">
						<div className="header-left">
							<div className="header-logo" style={{background: item?.color?item.color:'' }} ></div>
							<div className="todo-header-name">{item.name}</div>
						</div>
						<div className="todo-quantity">0</div>
					</div>

					<div className="todo-body">
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
							<div key={index} className="todo-card">
								<div className="card-header">
									<div className="header-left">
										<div className="avatar">
											<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5M2j5aP_QleSz2Sb2Qgf-J5UgjP3po54hg&usqp=CAU"
												alt=""
												className="avatar-image"
											/>
										</div>
										<div className="name">Clint Name</div>
									</div>
									<div className="header-right">
										<div className="avatar">
											<img
												src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
												alt=""
												className="avatar-image"
											/>
										</div>
										<div className="name">Farhan Galib</div>
									</div>
								</div>
								<div className="card-main">
									<div className="main-left">
										<div className="icon">
											<BiSolidLayer />
										</div>
										<div className="text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Rerum, et enim possimus cupiditate aliquam earum voluptate
											corrupti explicabo accusamus blanditiis officiis animi
											quia. Illum error quae iure, commodi optio deleniti!
										</div>
									</div>
									<div className="main-right">
										<div className="icon">
											<FaClipboardList />
										</div>
										<div className="quantity">1/2</div>
									</div>
								</div>

								<div className="card-actions">
									<div className="avatar">
										<img
											src="https://static.vecteezy.com/system/resources/previews/023/120/094/non_2x/ai-generative-a-man-on-solid-color-background-with-pout-face-expression-free-photo.jpg"
											alt=""
											className="avatar-image"
										/>
									</div>
									<div className="avatar">
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ03OtQ-y-WUBzY7YcbW1i8LfQBYRUkFb2A&usqp=CAU"
											alt=""
											className="avatar-image"
										/>
									</div>
									<div className="quantity">12+</div>
									<div className="comments">
										<div className="icon">
											<FaRegComments />
										</div>
										12
									</div>
									<div className="files" onClick={handleModal}>
										<div className="icon file-icon">
											<RiAttachment2 />
										</div>
										{files.length}
									</div>
									<div className="date">
										<div className="icon">
											<AiFillCalendar />
										</div>
										30-12-2022
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default App;
