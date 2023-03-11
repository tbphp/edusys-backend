<?php

namespace App\Http\Controllers;

use App\Enums\ErrCode;
use App\Exceptions\CException;
use App\Http\Requests\SchoolTeacherStoreRequest;
use App\Models\School;
use App\Models\Teacher;

class SchoolTeacherController extends Controller
{
    /**
     * 验证学校管理员权限
     *
     * @param School $school
     * @return void
     */
    protected function _checkOwner(School $school)
    {
        if (!$school->is_owner) {
            throw new CException(ErrCode::HTTP_AUTHORIZATION);
        }
    }

    public function index(School $school)
    {
        $this->_checkOwner($school);

        return $school->teachers()->paginate();
    }

    public function store(SchoolTeacherStoreRequest $request, School $school)
    {
        $this->_checkOwner($school);

        $teacher = Teacher::where('username', $request->input('username'))->first();
        if (empty($teacher)) {
            throw new CException(ErrCode::DATA_NOT_FOUND, '您查询的邮箱不存在');
        }

        $exists = $school->teachers()->where('id', $teacher->id)->first();
        if ($exists) {
            throw new CException('该老师已经在学校里面，不能重复邀请');
        }

        $school->teachers()->attach($teacher);
    }

    public function destroy(School $school, int $teacher)
    {
        $this->_checkOwner($school);

        $school->teachers()->detach($teacher);
    }
}