class Node{
    public:
    int data;
    Node* next;
    Node(int data){
        this->data=data;
        this->next=NULL;
    }
};
 class MyCircularQueue {
public:
Node *head,*last;
int curr,maxi;
MyCircularQueue(int k) {
        head=NULL;
        last=NULL;
        curr=0;
        maxi=k;
    }
    
    bool enQueue(int value) {
        if(curr==maxi)return false;
        if(head==NULL){
            head=new Node(value);
            last=head;
        }   
        else{
            Node *newnode=new Node(value);
            last->next=newnode;
            last=last->next;
        }
        curr++;
        return true;
    }  
    bool deQueue() {
        if(curr==0)return false;
        head=head->next;
        curr--;
        return true;
    }
    
    int Front() {
        if(curr==0)return -1;
        return head->data;
    }
    
    int Rear() {
        if(curr==0)return -1;
        return last->data;
    }
    
    bool isEmpty() {
        return curr==0;
    }
    
    bool isFull() {
       return curr==maxi;
    }
};