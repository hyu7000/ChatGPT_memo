// 버튼 요소 생성 및 document에 추가
const mainBtn = document.createElement('button');
mainBtn.innerText = 'Start';
mainBtn.style.position = 'fixed';
mainBtn.style.right = '35px';
mainBtn.style.bottom = '20px';
mainBtn.style.zIndex = '1000'; // 높은 z-index를 설정하여 다른 요소 위에 표시
mainBtn.style.backgroundColor = '#323335';
mainBtn.style.color = 'white';
mainBtn.style.border = 'none';
mainBtn.style.borderRadius = '5px';
mainBtn.style.padding = '10px 20px';
mainBtn.style.cursor = 'pointer';
document.body.appendChild(mainBtn);

const removeBtn = document.createElement('button');
removeBtn.innerText = 'remove';
removeBtn.style.position = 'fixed';
removeBtn.style.right = '250px';
removeBtn.style.bottom = '20px';
removeBtn.style.zIndex = '1000'; // 높은 z-index를 설정하여 다른 요소 위에 표시
removeBtn.style.backgroundColor = '#323335';
removeBtn.style.color = 'white';
removeBtn.style.border = 'none';
removeBtn.style.borderRadius = '5px';
removeBtn.style.padding = '10px 20px';
removeBtn.style.cursor = 'pointer';
document.body.appendChild(removeBtn);

const refreshBtn = document.createElement('button');
refreshBtn.innerText = 'refresh';
refreshBtn.style.position = 'fixed';
refreshBtn.style.right = '125px';
refreshBtn.style.bottom = '20px';
refreshBtn.style.zIndex = '1000'; // 높은 z-index를 설정하여 다른 요소 위에 표시
refreshBtn.style.backgroundColor = '#323335';
refreshBtn.style.color = 'white';
refreshBtn.style.border = 'none';
refreshBtn.style.borderRadius = '5px';
refreshBtn.style.padding = '10px 20px';
refreshBtn.style.cursor = 'pointer';
document.body.appendChild(refreshBtn);

// 팝업요소 생성 및 document에 추가
const popup = document.createElement("div");
popup.className = "popup";
popup.id = "popup";
popup.style.position = "fixed";
popup.style.zIndex = "9999";
popup.style.backgroundColor = "#fff";
popup.style.padding = "10px";
popup.style.border = "2px solid #323335";
popup.style.borderRadius = "5px"; // 둥글게 만드는 부분
document.body.appendChild(popup);

// 팝업에 Label 요소 추가
const enterLabel = document.createElement("label");
enterLabel.innerText = "Enter a memo."; // 라벨 텍스트 설정
enterLabel.style.display = "block"; // 라벨을 새로운 줄에서 시작하게 함
enterLabel.style.marginBottom = "5px"; // 라벨 아래에 여백 추가
popup.appendChild(enterLabel);

// 팝업에 text input 요소 추가
const memoInput = document.createElement("input");
memoInput.type = "text";
memoInput.id = "memoInput";
memoInput.style.marginRight = "10px"; // 텍스트 입력창 오른쪽에 여백 추가
memoInput.style.borderRadius = "5px"; // 둥글게 만드는 부분
popup.appendChild(memoInput);

// 팝업에 btn 요소 추가
const okButton = document.createElement("button");
okButton.id = "okButton";
okButton.innerText = "OK";
okButton.style.border = '2px solid #323335'; // 검은색 테두리, 2px 두께
okButton.style.borderRadius = '5px'; // 테두리 모서리를 5px 둥글게
okButton.style.backgroundColor = '#323335'; // 배경색을 밝은 검정색으로 설정
okButton.style.color = 'white'; // 글자 색상을 흰색으로 설정
okButton.style.padding = '5px 10px'; // 패딩 설정 (상하 5px, 좌우 10px)
okButton.style.marginRight = "10px"; // 텍스트 입력창 오른쪽에 여백 추가
popup.appendChild(okButton);

// 팝업에 btn 요소 추가
const cancelButton = document.createElement("button");
cancelButton.id = "cancelButton";
cancelButton.innerText = "Cancel";
cancelButton.style.border = '2px solid #323335'; // 검은색 테두리, 2px 두께
cancelButton.style.borderRadius = '5px'; // 테두리 모서리를 5px 둥글게
cancelButton.style.backgroundColor = '#323335'; // 배경색을 밝은 검정색으로 설정
cancelButton.style.color = 'white'; // 글자 색상을 흰색으로 설정
cancelButton.style.padding = '5px 10px'; // 패딩 설정 (상하 5px, 좌우 10px)
popup.appendChild(cancelButton);

// View memo 팝업요소 생성 및 document에 추가
const popup_Viewmemo = document.createElement("div");
popup_Viewmemo.className = "popup_Viewmemo";
popup_Viewmemo.id = "popup_Viewmemo";
popup_Viewmemo.style.position = "fixed";
popup_Viewmemo.style.zIndex = "9999";
popup_Viewmemo.style.backgroundColor = "#fff";
popup_Viewmemo.style.padding = "10px";
popup_Viewmemo.style.border = "2px solid #323335";
popup_Viewmemo.style.borderRadius = "5px"; // 둥글게 만드는 부분
document.body.appendChild(popup_Viewmemo);

// View memo 팝업에 Label 요소 추가
const viewMemoListLabel = document.createElement("label");
viewMemoListLabel.innerText = "Memo List."; // 라벨 텍스트 설정
viewMemoListLabel.style.display = "block"; // 라벨을 새로운 줄에서 시작하게 함
viewMemoListLabel.style.marginBottom = "5px"; // 라벨 아래에 여백 추가
popup_Viewmemo.appendChild(viewMemoListLabel);

// 눌린 현재 버튼을 저장할 변수
var curBtn;

var curUrl = window.location.href;
var memoList = [];
var dataList = [];

const TOP = 0;
const BOTTOM = 1;
const RIGHT = 2;
const LEFT = 3;

// 메세지 잠시 띄우기
function showTemporaryMessage(message, duration) {
  // 메시지를 표시할 div 요소를 생성합니다.
  const messageDiv = document.createElement('div');
  messageDiv.style.position = 'fixed';
  messageDiv.style.top = '50%';
  messageDiv.style.left = '50%';
  messageDiv.style.transform = 'translate(-50%, -50%)';
  messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
  messageDiv.style.color = 'white';
  messageDiv.style.padding = '30px';
  messageDiv.style.borderRadius = '5px';
  messageDiv.style.zIndex = '9999';
  messageDiv.style.fontSize = '24px'; // 글꼴 크기를 증가시킵니다.
  messageDiv.innerText = message;

  // 메시지를 body 요소에 추가합니다.
  document.body.appendChild(messageDiv);

  // 일정 시간(duration)이 지난 후 메시지를 삭제합니다.
  setTimeout(() => {
    messageDiv.remove();
  }, duration);
}

function reLocationPopUp(pushed_Btn, popup_to_relocation, direction) {
  if (popup_to_relocation.style.display != "block") popup_to_relocation.style.display = 'none';

  const buttonRect = pushed_Btn.getBoundingClientRect();

  // console.log(popup_to_relocation.offsetWidth);

  if (direction == TOP) {
    popup_to_relocation.style.left = buttonRect.right - popup_to_relocation.offsetWidth + "px";
    popup_to_relocation.style.top = buttonRect.top - popup_to_relocation.offsetHeight - 5 + "px";
  } else if (direction == LEFT) {
    popup_to_relocation.style.left = buttonRect.left - popup_to_relocation.offsetWidth - 5 + "px";
    popup_to_relocation.style.top = buttonRect.top + "px";
  }
}

function generateSavedMemoBtn(id) {
  const memoListBtn = document.createElement("button");
  memoListBtn.id = "memo-" + id;
  memoListBtn.innerText = id;
  memoListBtn.style.border = '2px solid #323335'; // 검은색 테두리, 2px 두께
  memoListBtn.style.borderRadius = '5px'; // 테두리 모서리를 5px 둥글게
  memoListBtn.style.backgroundColor = '#323335'; // 배경색을 밝은 검정색으로 설정
  memoListBtn.style.color = 'white'; // 글자 색상을 흰색으로 설정
  memoListBtn.style.padding = '5px 10px'; // 패딩 설정 (상하 5px, 좌우 10px)
  memoListBtn.style.display = 'block'; //수직 배열
  memoListBtn.style.marginBottom = '10px';
  popup_Viewmemo.appendChild(memoListBtn);

  reLocationPopUp(mainBtn, popup_Viewmemo, TOP);

  memoListBtn.addEventListener("click", () => {
    location.href = "#" + id;
  });
}

// 팝업의 ok 버튼이 눌렸을 경우
okButton.addEventListener("click", () => {
  if (memoInput.value == "") {
    showTemporaryMessage('Cannot save empty text.', 2000);
    return;
  }

  if (memoList.includes(memoInput.value)) {
    showTemporaryMessage('The same memo exists..', 2000);
    return;
  }

  if (curBtn) {
    const parent = curBtn.parentElement;
    const divElements = parent.querySelectorAll('div');
    const divTextContents = [];
    var questionText;
    var eleDivClass;

    divElements.forEach(divElement => {
      divTextContents.push(divElement.textContent);
    });

    questionText = divTextContents[5];

    parent.id = memoInput.value;
    curBtn = "";

    console.log('pre:' + curUrl);

    if (curUrl.indexOf('#') !== -1) {
      var indexOfHash = curUrl.indexOf('#');
      curUrl = curUrl.slice(0, indexOfHash);
      console.log(curUrl);
    }

    var q_index = findIndexOfElementWithTextAndClassName(questionText, parent.className);

    console.log('q_index : ', q_index);

    const storageKey = `dataFor:${curUrl}`;
    var dataToSave = { id: memoInput.value, index: q_index };

    dataList.push(dataToSave);
    console.log('dataList : ', dataList);
    console.log('dataToSave1 : ', dataToSave);

    function saveToStorageAndGenerateBtn(value) {
      console.log('suceess', value);
      console.log('Data saved for2', value);
      memoList.push(value);

      generateSavedMemoBtn(value);
    }

    chrome.storage.sync.set({ [storageKey]: dataList }, saveToStorageAndGenerateBtn(dataToSave.id));
  }
  memoInput.value = "";
  popup.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  memoInput.value = "";
  popup.style.display = "none";
});

removeBtn.addEventListener("click", () => {
  chrome.storage.sync.clear(function () {
    console.log('All data cleared');
  });
});

refreshBtn.addEventListener("click", () => {
  let buttons = popup_Viewmemo.getElementsByTagName("button");

  console.log('buttons : ',buttons);

  while(buttons.length > 0){
    buttons[0].parentNode.removeChild(buttons[0]);
  }

  curUrl = window.location.href;

  console.log('curUrl : ',curUrl);

  checkStorage();
  generateMemorizeBtn();

  mainBtn.innerText = 'View memo';
});


// 전체 중 특정 값들이 포함된 요소 찾기
function findElementsByPartialClassNames(partialClassNames) {
  const allElements = document.querySelectorAll('*');
  const filteredElements = Array.from(allElements).filter(element => {
    return partialClassNames.every(partialClassName =>
      Array.from(element.classList).some(className => className.includes(partialClassName))
    );
  });

  return filteredElements;
}

// 특정 문자로 필터
function filteredElementsByText(filterText) {
  const partialClassNames = ['group', 'w-full', 'text-gray-800'];
  const elements = findElementsByPartialClassNames(partialClassNames);
  const filteredElements = elements.filter(element =>
    !Array.from(element.classList).some(className => className.includes(filterText))
  );

  return filteredElements;
}

// 메모 버튼 생성
function generateMemorizeBtn() {
  const filteredElements = filteredElementsByText('#');

  filteredElements.forEach(element => {
    // 버튼 생성
    const button = document.createElement('button');
    button.textContent = 'Memorize'; // 버튼 텍스트 설정
    button.style.position = 'absolute'; // 상위 요소를 기준으로 절대 위치 지정
    button.style.right = '20px'; // 오른쪽에서 10px 떨어진 위치
    button.style.bottom = '20px'; // 하단에서 10px 떨어진 위치
    button.style.border = '2px solid black'; // 검은색 테두리, 2px 두께
    button.style.borderRadius = '5px'; // 테두리 모서리를 5px 둥글게
    button.style.backgroundColor = '#323335'; // 배경색을 밝은 검정색으로 설정
    button.style.color = 'white'; // 글자 색상을 흰색으로 설정
    button.style.padding = '5px 10px'; // 패딩 설정 (상하 5px, 좌우 10px)

    // 이벤트 리스너 추가 (예: 클릭 이벤트)
    button.addEventListener('click', () => {
      if (memoList.includes(button.id)) {
        showTemporaryMessage('This memo has already been registered', 2000);
        console.log('Btn id : ', button.id);
        return;
      }
      // 원하는 동작 구현
      popup.style.display = "block";

      reLocationPopUp(button, popup, LEFT);

      curBtn = button;

    });

    // 버튼을 filteredElement에 추가하기 전에 상위 요소에 position: relative 또는 position: absolute 스타일 지정
    element.style.position = 'relative';

    // 버튼을 filteredElement에 추가
    element.appendChild(button);
  });

  // console.log(filteredElements);

  console.log('Executed');
}

// 웹페이지 전체에서 특정 문자열이 있는지 확인하기

function findElementWithText(textToFind) {
  const searchTerm = textToFind;
  const elements = document.querySelectorAll('body *');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if ((element.textContent && element.textContent.includes(searchTerm)) ||
      (element.innerText && element.innerText.includes(searchTerm))) {
      if (element.classList.contains('group')) {
        // console.log("문자열이 포함된 요소를 찾았습니다:", element);
        return element;
      }
      // 이제 element 참조를 사용하여 해당 요소를 조작할 수 있습니다.
    }
  }
}

function generateSavedMemoBtn_init(list) {
  const filteredElements = filteredElementsByText('#');

  const divTextContents = [];

  filteredElements.forEach(filteredElement => {
    divTextContents.push(filteredElement);
  });

  for (var i = 0; i < list.length; i++) {
    if (list[i].id) {
      generateSavedMemoBtn(list[i].id);
    }

    if (list[i].index) {
      divTextContents[list[i].index / 2].id = list[i].id;
    }

    // console.log('list[0].index', list[i].index/2);
    // console.log('divTextContents[list[i].index]', divTextContents[list[i].index/2]);
  }
}

// 현재 접근한 div 인덱스가 몇번째인지 반환하는 함수
function findIndexOfElementWithTextAndClassName(text, className) {
  const partialClassNames = ['group', 'w-full', 'text-gray-800'];
  const elements = findElementsByPartialClassNames(partialClassNames);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent.includes(text)) {
      return i;
    }
  }
  return -1; // 찾지 못한 경우 -1 반환
}

// 현재 URL에서 저장된 값들 확인하기
function checkStorage() {
  if (curUrl.indexOf('#') !== -1) {
    var indexOfHash = curUrl.indexOf('#');
    curUrl = curUrl.slice(0, indexOfHash);
  }

  const storageKey = `dataFor:${curUrl}`;

  chrome.storage.sync.get([storageKey], function (result) {
    var keys = Object.keys(result);

    if (result[storageKey] === undefined) {
      return;
    }
    else if (keys[0] == storageKey) {
      dataList = result[storageKey];

      console.log("dataList : ",dataList);

      generateSavedMemoBtn_init(dataList);
    }
  });
}

// 버튼 클릭 이벤트 설정
mainBtn.addEventListener('click', () => {
  if (mainBtn.innerText == 'Start') {
    checkStorage();
    generateMemorizeBtn();

    mainBtn.innerText = 'View memo';
  } else if (mainBtn.innerText == 'View memo') {
    popup_Viewmemo.style.display = "block";

    reLocationPopUp(mainBtn, popup_Viewmemo, TOP);

    mainBtn.innerText = 'Close';
  } else if (mainBtn.innerText == 'Close') {
    popup_Viewmemo.style.display = 'none';
    mainBtn.innerText = 'View memo';
  }
});
