from .models import Submission


def Modify_submission_status( ** report ):
    '''
        Update the status of target submission
    '''
    submission = report[ 'submission' ]
    case = report[ 'case' ]
    result = report[ 'result' ]
    complete = report[ 'complete' ]
    if result == 'Running':
        Submission.objects.filter( submission_id = submission ).update( judge_status = 'Running on test ' + str( case ) )
    else:
        sub = Submission.objects.get( submission_id = submission )
        Judgeinfo(
            submission = sub,
            ** get_update_dict( report )).save()
        if complete == True:
            Submission.objects.filter( submission_id = submission ).update( judge_status = result , completed = True )

def get_update_dict( dic ):
    '''
        return dict of update field filter
    '''
    L = []
    t = dic
    for _ in t:
        if _ not in Submission.Judge.update_field:
            L.append( _ )
    for _ in L:
        t.pop( _ )
    return t

def read_modify_status( ):
    pass
    # s = self.result.get( block = True )
    # Modify_submission_status( ** s )