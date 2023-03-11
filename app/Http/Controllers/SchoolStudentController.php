<?php

namespace App\Http\Controllers;

use App\Enums\ErrCode;
use App\Exceptions\CException;
use App\Http\Requests\SchoolStudentStoreRequest;
use App\Http\Requests\SchoolStudentUpdateRequest;
use App\Models\School;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SchoolStudentController extends Controller
{
    /**
     * 验证学校管理员权限
     *
     * @param School $school
     * @return void
     */
    protected function _checkOwner(School $school)
    {
        // 验证管理员
        if (!$school->is_owner) {
            throw new CException(ErrCode::HTTP_AUTHORIZATION);
        }
    }

    public function index(School $school)
    {
        return $school->students()->paginate();
    }

    public function store(SchoolStudentStoreRequest $request, School $school)
    {
        $this->_checkOwner($school);

        $student = new Student($request->only(['nane', 'username']));
        $password = Str::random(6);
        $student->password = Hash::make($password);
        $student->school_id = $school->id;
        $student->save();

        return compact('password');
    }

    public function update(SchoolStudentUpdateRequest $request, School $school, int $student)
    {
        $this->_checkOwner($school);

        $student = $school->students()->findOrFail($student);
        $student->update($request->only(['name']));
    }

    public function destroy(School $school, int $student)
    {
        $this->_checkOwner($school);

        $student = $school->students()->findOrFail($student);
        $student->delete();
    }

    /**
     * 重置密码
     *
     * @param School $school
     * @param int $student
     * @return array
     */
    public function resetPassword(School $school, int $student)
    {
        $this->_checkOwner($school);

        $student = $school->students()->findOrFail($student);
        $password = Str::random(6);
        $student->password = Hash::make($password);
        $student->save();

        return compact('password');
    }
}
