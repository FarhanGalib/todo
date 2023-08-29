import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { CgAttachment } from 'react-icons/cg';

export default function Modal({ handleModal, files, setFiles }) {
	const [fileNames, setFileNames] = useState([]);
	const filesRef = useRef();

	useEffect(() => {
		setFileNames(files);
	}, []);

	const attachFile = () => {
		filesRef.current.click();
	};

	const removeFile = (index) => {
		console.log('index=', index);
		const copyFileNames = fileNames;
		copyFileNames.splice(index, 1);
		setFileNames([...copyFileNames]);
	};
	console.log(fileNames);

	const handleFiles = (e) => {
		if (e.target.files.length > 0) {
			const names = [];
			Array.from(e.target.files).forEach((file) => {
				names.push(file.name);
			});
			setFileNames((prev) => prev.concat(names));
		}
	};

	const uploadFiles = () => {
		alert();
		setFiles(() => fileNames);
		handleModal();
	};

	return (
		<div>
			<div className={styles.overlay}></div>
			<div className={styles.modal_container}>
				<div className={styles.modal_main_body}>
					<div className={styles.modal_header_actions}>
						<div className={styles.header_title}>Attach File</div>
						<AiOutlineClose
							className={styles.close_icon}
							onClick={() => handleModal()}
						/>
					</div>
					<div className={styles.body}>
						{/* <label htmlFor="file_input"> */}
						<button className={styles.choose_button} onClick={attachFile}>
							<CgAttachment />
							Choose File
						</button>
						{/* </label> */}
						<input
							id="file_input"
							name="file_input"
							type="file"
							multiple
							className={styles.files_input}
							ref={filesRef}
							onChange={(e) => handleFiles(e)}
						></input>
						<div className={styles.files}>
							{fileNames.map((item, index) => (
								<div
									key={index + `${new Date().valueOf()}`}
									className={styles.file_container}
								>
									<div className={styles.file_name}>{item}</div>
									<AiOutlineClose
										className={styles.remove_icon}
										onClick={() => removeFile(index)}
									/>
								</div>
							))}
						</div>
					</div>
					<div className={styles.actions}>
						<button
							className={styles.close_button}
							onClick={() => handleModal()}
						>
							close
						</button>
						<button
							className={styles.upload_button}
							onClick={() => uploadFiles()}
						>
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
