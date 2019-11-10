using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KevinBehaviour : MonoBehaviour
{
    public bool isWalking = false;
    public bool haveTurned = false;

    private Animator animator;
    [SerializeField]
    private Rigidbody kevinRB;

    [SerializeField]
    private GameObject parent;

    private void Start() {
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if(isWalking && !haveTurned)
        {
            animator.SetBool("Walking", true);
            kevinRB.velocity = new Vector3(0, 0, -1);
        }
        else if(haveTurned)
        {
            kevinRB.velocity = new Vector3(1, 0, 0);
        }
    }

    private void OnCollisionEnter(Collision other)       
    {
        haveTurned= true;
        animator.SetBool("Walking", false);
        animator.SetBool("Turning", true);
    }
}
