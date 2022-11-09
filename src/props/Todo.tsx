import React, { useState } from 'react';

export default function Todo() {
  const [activity, setActivity] = useState(['makan']);
  const [newActivity, setNewActivity] = useState('');
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div className="form ">
          <div className="input-group">
            <label htmlFor="name">Activity</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setNewActivity(e.target.value)}
              className="w-full border border-gray-300 p-1"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              className="px-10 py-2 bg-gray-600 text-white"
              onClick={() => setActivity([...activity, newActivity])}
            >
              Save
            </button>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-5">
          <h3 className=" font-semibold text-xl pb-5">Activity :</h3>
          <ul className=" list-disc pl-5">
            {activity.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
